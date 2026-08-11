import { createSlice } from "@reduxjs/toolkit";


const WatchlistSlice = createSlice({
    name:"WatchList",

    initialState:{
        Watch:[]
    },
    reducers:{
        addToList(state,action){
            state.Watch.push(action.payload)
        },
        removeFromList(state,action){
          console.log("🔥 REMOVE REDUCER RUNNING")
    console.log("PAYLOAD:", action.payload)
    console.log("WATCH BEFORE:", state.Watch)

            state.Watch= state.Watch.filter((item)=>item.id !== action.payload)
             console.log("AFTER REMOVE:", state.Watch)
        }
    }
}
    
)
export const{addToList,removeFromList} = WatchlistSlice.actions
export default WatchlistSlice.reducer