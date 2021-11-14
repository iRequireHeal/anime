import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const animeListApi = createApi({
    reducerPath: 'animeListApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://api.anidb.net:9001/httpapi?equest=main',
    }),
    endpoints: (build) => ({
        getAnimeList: build.query({
            query:() =>
                "https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=0"
        })
    })
})

export const {useGetAnimeListQuery} = animeListApi;