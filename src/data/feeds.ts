// A basic categorise list is created here.
// Users can add additional lists, which will be saved locally and can be categorized.
import { FeedlyProvider } from "../types";

// Require root url for favicon
const FEEDS: FeedlyProvider[] = [
  {
    title: "Daring Fireball",
    website: "http://daringfireball.net/",
    feedId: "feed/http://daringfireball.net/index.xml",
    lastUpdated: 1520207220000,
    velocity: 18.1,
    subscribers: 129803,
    curated: true,
    featured: true,
    contentType: "article",
    language: "en",
    description:
      "Entries from Daring Fireball. Sort of like RSS but via Twitter.",
    iconUrl: "https://someSite/someIconImage",
    visualUrl: "https://someSite/someVisualImage",
    partial: false,
    coverColor: "4A525A",
    deliciousTags: ["tech", "apple", "mac"],
  },
];

export default FEEDS;
