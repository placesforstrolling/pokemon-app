import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2'}),
    tagTypes: ['Pokemons'],
    endpoints: (builder) => ({
        getPokemons: builder.query({
            query: (offset) => `/pokemon?offset=${offset}&limit=12`,
            providesTags: ['Pokemons']
        }),
        getPokemon: builder.query({
            query: (id) => `/pokemon/${id}`,
            providesTags: ['Pokemons']
        })

    })
});

export const {useGetPokemonsQuery, useGetPokemonQuery} = apiSlice;