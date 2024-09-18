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

export interface Feed {
    id: string,
    title: string,
    feedProviders: FeedlyProvider[]
}

export interface FeedCategory {
    name: string,
    colour: string
}

export interface FeedlyQueryResponse {
    hint: string,
    related: string[],
    results: FeedlyProvider[]
}
