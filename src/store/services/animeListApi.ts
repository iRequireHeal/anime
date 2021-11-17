import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {animeType} from "../types/types";

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
        getAnime: build.query<animeType,number|undefined>({
            query:(id) => `https://kitsu.io/api/edge/anime/${id}`,
            transformResponse: (response: { data: animeType }) => response.data,
        })
    })
})

export const {useGetAnimeListQuery, useGetAnimeQuery} = animeListApi;

