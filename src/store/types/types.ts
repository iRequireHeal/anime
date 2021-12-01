export interface animeType {
    id: number;
    attributes: Attributes
    relationships: Relations
}

export interface genresType {
    id: number;
    attributes: {
        name: string
    }
}

export interface PropsT {
    name: string | undefined;
    page: number | undefined;
}

interface Attributes {
    canonicalTitle: string
    description: string;
    ageRating: string;
    slug: string
    episodeCount: number
    showType: string
    status: string
    popularityRank: number
    youtubeVideoId: string
    coverImage: Images
}

interface Images {
    large: string
    original: string
}

interface Relations {
    episodes: links
    characters: links
    categories:links
}

interface links {
    related: string
    self: string
}
