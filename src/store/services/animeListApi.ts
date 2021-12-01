import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {animeType, genreListT} from "../types/types";
import {log} from "util";

type genreT ={
    genre: string;
    page: number;
}

export const animeListApi = createApi({
    reducerPath: 'animeListApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://kitsu.io/api/edge/anime',
    }),
    endpoints: (build) => ({
        getAnimeList: build.query({
            query: (page) => ({
                url: `?page[limit]=10&page[offset]=${page}`,
            })
        }),
        getAnime: build.query<animeType, number | undefined>({
            query: (id) => `https://kitsu.io/api/edge/anime/${id}`,
            transformResponse: (response: { data: animeType }) => response.data
        }),
        getSearchedList: build.query({
            query: (name) => ({
                url: `?page[limit]=20&filter[text]=${name}`
            })
        }),
        getGenres: build.query({
            query: (id) => ({
                url: `https://kitsu.io/api/edge/anime/${id}/genres`
            })
        }),
        getByGenre: build.query({
            query: (genre:genreListT) =>
                ({
                url: `?page[limit]=20&filter[genres]=${genre.genres}&page[offset]=${genre.page}`

            })
        })
    })
})

export const {
    useGetAnimeListQuery,
    useGetAnimeQuery,
    useGetSearchedListQuery,
    useGetGenresQuery,
    useGetByGenreQuery
} = animeListApi;


