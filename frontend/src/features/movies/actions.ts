import movieService from './services'
import { createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { IMovie } from "./IMovie"

const module_prefix = 'movie'

export const getAllMovies = createAsyncThunk<IMovie, string, {state: RootState}>(
    `${module_prefix}/getAll`,
    async(arg:any, trunkAPI) =>{
        try{
            const response = await movieService.getAll()
            const data = response.data  
            if (response.status === 200){
                return data
            }else{
                return trunkAPI.rejectWithValue(data)
            }
        } 
        catch(e: any){
            return trunkAPI.rejectWithValue(e.response.data)
        }
    }
)