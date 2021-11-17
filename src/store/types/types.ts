export type animeType = {
    id: number;
    attributes: {
        slug:string
        titles: {en: string}
        posterImage: {small: string}
        ageRating: string;
        description: string;
    }
}

export type categoriesType = {
    relationships: { categories: { links: {related:string}} }
}