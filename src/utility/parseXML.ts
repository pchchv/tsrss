import { Article } from "@/types";

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
