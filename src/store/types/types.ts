export type animeType = {
    id: number;
    attributes: {
        slug:string
        canonicalTitle:string
        posterImage: {small: string}
        ageRating: string;
        description: string;
    }
}

export type categoriesType = {
    relationships: { categories: { links: {related:string}} }
}