import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2'}),
    tagTypes: ['Heroes'],
    endpoints: builder => ({
        getPokemons: builder.query({
            query: () => '/pokemon?offset=0&limit=12',
            providesTags: ['Pokemons']
        })

    })
});

export const {useGetPokemonsQuery} = apiSlice;