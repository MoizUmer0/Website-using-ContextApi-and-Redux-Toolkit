import { useSelector } from "react-redux"
import Card from "../components/Card"
export default function Watchlist(){
    const Watch = useSelector(state=>state.WatchList.Watch)
    return(
<div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 justify-evenly  mt-10 mr-6">
        {
            Watch && Watch.length>0?Watch.map((movie)=>(<Card  
            key={movie.id}
            items={movie}
            />)): null
        }
</div>
    )
}