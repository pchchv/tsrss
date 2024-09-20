import { Article } from "@/types";
import {parseStringPromise} from "xml2js";

function applyFilter(filter: string, articles: Article[]){
  if (filter === "today") {
    const startOfTodayinMillis = new Date(new Date().setHours(0, 0, 0, 0)).getTime()
    return articles.filter((article) => {
      if (article.published) {
        let articleTimeinMillis = new Date(article.published).getTime()
        return articleTimeinMillis - startOfTodayinMillis >= 0
      }
      return false
    });
  }
  return articles
}

function formatDate(pubDate: string){
  // determine if same day
  const today = new Date()
  const date = new Date(pubDate)
  // if today (since rss feeds are very recent, should only need to test DD value)
  let daysDifference = Math.round( (today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
  if (daysDifference === 0) {
    // find time (minutes or hours) elapsed
    let millisDifference = today.getTime() - date.getTime()
    let hours = Math.floor(millisDifference / 1000 / 60 / 60)
    millisDifference -= hours * 1000 * 60 * 60
    let minutes = Math.floor(millisDifference / 1000 / 60)
    // how accurate do you wan?
    if (hours >= 1) {
      return hours + "h"
    } else {
      return minutes + "m"
    }
  }
  
  // else find how many days ag
  return daysDifference.toFixed() + "d"
}

export default async function parseXML(xml: any) {
  let result: Article[] = await parseStringPromise(xml).then((result) => {
    let items = result.rss.channel[0].item
    // order them by newest
    items.sort((a: any, b:any) => {
      let dateA = new Date(a.pubDate[0])
      let dateB = new Date(b.pubDate[0])
      return dateB.getTime() - dateA.getTime()
    });
    
    return items.map((item: any) => {
      let image = item.image ? item.image[0] : undefined
      let authors = ["Not Me"]
      return {
        authors: authors,
        title: item.title[0],
        description: item.description[0],
        image: image,
        link: item.link[0],
        published: formatDate(item.pubDate[0]),
      }
    });
  }).catch((err) => {});
  return result
}
