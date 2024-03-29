import { createReducer } from "@reduxjs/toolkit"
import { IMovieState } from "./IMovie"
import { getAllMovies } from "./actions"

const initialState:IMovieState ={
    movies:[],
    statusMessage: '',
    errorMessage: '',
    isError: false,
    isSuccess: false,
    isLoading: false 
}
export const movieReducer = createReducer(initialState,(builder)=>{
    builder
    .addCase(getAllMovies.pending,(state)=>{
        state.isLoading = true
    })
    .addCase(getAllMovies.fulfilled,(state,actions)=>{
        state.movies = actions.payload.data
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
    })
    .addCase(getAllMovies.rejected,(state, actions:any)=>{
        state.errorMessage = actions.payload.status
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
    })
} 

)