import Watchlist from '../pages/Watchlist'
import PopularReducer from '/src/slices/popular-slice.jsx'
import WatchReducer from '/src/slices/WatchList-Slice.jsx'
import {configureStore} from '@reduxjs/toolkit'

export const Store = configureStore({
    reducer:{
       Popular: PopularReducer,
       WatchList:WatchReducer
    }
})
export default Store