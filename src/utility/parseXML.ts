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
