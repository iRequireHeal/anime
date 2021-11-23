export type animeType = {
    id: number;
    attributes: {
        canonicalTitle: string
        description: string;
        ageRating: string;
        slug: string
        episodeCount: number
        showType: string
        status: string
        popularityRank: number
        youtubeVideoId: string
        coverImage: { large: string }
    }
    relationships: { characters: { links: { self: string } } }
}

export type genresType = {
    id:number;
    attributes: {name:string}
}
