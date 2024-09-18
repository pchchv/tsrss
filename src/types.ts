export interface FeedlyProvider {
    feedId: string,
    subscribers: number,
    title: string,

    //Optional Fields
    description?: string,
    website?: string,
    lastUpdated?: number,
    velocity?: number,
    language?: string,
    featured?: boolean,
    iconUrl?: string,
    visualUrl?: string,
    coverUrl?: string,
    logo?: string,
    curated?: boolean,
    partial?: boolean,
    contentType?: string,
    coverColor?: string, 
    deliciousTags?: string[],
    topics?: string[],
}
