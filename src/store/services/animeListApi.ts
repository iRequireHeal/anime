import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {animeType, PropsT} from "../types/types";

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
            query: (search: PropsT) => ({
                url: `?page[limit]=20&filter[text]=${search.name}&page[offset]=${search.page}`
            })
        }),
        getGenres: build.query({
            query: (id) => ({
                url: `https://kitsu.io/api/edge/anime/${id}/genres`
            })
        }),
        getByGenre: build.query({
            query: (genre:PropsT) =>
                ({
                url: `?page[limit]=20&filter[genres]=${genre.name}&page[offset]=${genre.page}`

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


