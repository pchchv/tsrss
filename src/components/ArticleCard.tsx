import { Article } from "@/types";

interface ArticleCardProps{
  article: Article
}

const extractText = (html: string) => {
  // this will still have HTML entities...
  let plainText = html.replace(/<[^>]+>/g, '')
  plainText = plainText.replace(/&nbsp;/g, ' ')
  // if larger than 450 chars, truncate
  if (plainText.length > 250) {
    return plainText.slice(0, 250).trimEnd() + "..."
  }
  return plainText
}
