import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    pokemonList: [],
    pokemonDetails: {},
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addPokemonList: (state, action) => {
            state.pokemonList = action.payload;
        },
        addPokemonDetails: (state, action) => {
            state.pokemonDetails = action.payload;
        }
    }
})

export const { addPokemonList, addPokemonDetails} = dataSlice.actions;

export default dataSlice.reducer;