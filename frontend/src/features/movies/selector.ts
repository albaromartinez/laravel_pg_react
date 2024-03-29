import { RootState } from "../../app/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectMoviesState = (state:RootState) => state.movies
export const movieSelector =  createSelector(selectMoviesState, (state)=>state)