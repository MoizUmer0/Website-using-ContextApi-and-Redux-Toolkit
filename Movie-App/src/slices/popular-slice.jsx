import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchPopularMovies = createAsyncThunk(
    "movies/fetchpopular",
    async()=>{
        const response =  await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=869bc38c3645b3ac83a8cb4209454784`)
        const data = await response.json()
        console.log(data.results)
        return data.results
    }
)
export const fetchMoviesID = createAsyncThunk(
    "movies/fetchId",
    async (id)=>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=869bc38c3645b3ac83a8cb4209454784`)
        const data = await response.json()
        console.log(data)
        return data
    }
)

const PopularSlice =createSlice({
    name: "popular",
    initialState:{
        PopularMovies:[],
        MoviesId: null,
        loading: false,
        error: null
    },
    reducers:{},

    extraReducers:(builder) =>{
        builder
        .addCase(fetchPopularMovies.pending,(state)=>{
            state.loading=true
        })
        .addCase(fetchPopularMovies.fulfilled,(state,action)=>{
            state.loading=false
            state.PopularMovies = action.payload
        })
        .addCase(fetchPopularMovies.rejected,(state,action)=>{
            state.loading=true
            state.error=action.error.message
        })
        .addCase(fetchMoviesID.fulfilled,(state,action)=>{
            state.loading=false
            state.MoviesId=action.payload
        })
    }

})
export default PopularSlice.reducer