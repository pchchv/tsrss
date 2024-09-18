import { Feed, ReadingMode, SortMode } from "../types";

export interface FeedState {
    feed: Feed[],
    readingMode: ReadingMode
    sortMode: SortMode,
}
