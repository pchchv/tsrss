import { Feed, ReadingMode, SortMode } from "../types";
import { v4 as uuidv4 } from 'uuid';
import FEEDS from '../data/feeds';

export interface FeedState {
    feed: Feed[],
    readingMode: ReadingMode
    sortMode: SortMode,
}

const INITIAL_STATE: FeedState = {
    // collection of user created feeds
    feed: [{
        id: uuidv4(),
        title: "My Feed",
        feedProviders: [FEEDS[0]]
    }],
    readingMode: "card",
    sortMode: "desc",
}
