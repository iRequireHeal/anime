import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const animeListApi = createApi({
    reducerPath: 'animeListApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://kitsu.io/api/edge/anime',
    }),
    endpoints: (build) => ({
        getAnimeList: build.query({
            query:() => ({
                url: `?page&page[offset]=0`,
            })
        }),
        getAnime: build.query({
            query:(id) =>
                `https://kitsu.io/api/edge/anime/${id}`
        })
    })
})

export const {useGetAnimeListQuery, useGetAnimeQuery} = animeListApi;