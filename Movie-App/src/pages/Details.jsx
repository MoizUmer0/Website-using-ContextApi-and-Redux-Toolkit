import { use, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchMoviesID } from '../slices/popular-slice'
import { FaStar, FaHeart } from "react-icons/fa"
import { addToList, removeFromList } from "../slices/WatchList-Slice"
export default function Details() {
    const [color, setcolor] = useState(false)
    const { id } = useParams()
    const dispatch = useDispatch()
    const movies = useSelector(state => state.Popular.MoviesId)
    const Watch = useSelector(state => state.WatchList.Watch)
    console.log("removeFromList:", removeFromList)
    console.log("typeof:", typeof removeFromList)
    function handleAddtoWatch() {
        setcolor(true)
        dispatch(addToList(movies))
    }
    function handleRemoveFromWatch() {
        setcolor(false)
        dispatch(removeFromList(movies.id))
    }

    useEffect(() => {
        dispatch(fetchMoviesID(id))
    }, [dispatch])
    return (
        <div>
            <h1 className="text-purple-500 font-poppins font-bold text-4xl text-center mt-6 border-t-white border-b-white border-2 border-l-0 border-r-0 p-2">Details</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
                <div className=" py-4 px-20 mt-30 col-span-1">
                    <img
                        className="  object-fit rounded-lg"
                        src={`https://image.tmdb.org/t/p/w500${movies?.poster_path}`} alt="" />
                </div>
                <div className=" p-4 md:pr-10 col-span-1 xl:col-span-2">
                    <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-poppins font-bold  mt-15 md:mt-24">{movies?.title}</h1>
                    <h1 className="text-gray-400  mt=8 md:mt-10  text-xl md:text-2xl whitespace-nowrap">{movies?.release_date.split('-')[0]}   .  <span>{Math.floor(movies?.runtime / 60)}h {movies?.runtime % 60}m</span></h1>
                    <h1 className="flex text-xl md:text-2xl text-yellow-400 gap-2 font-bold mt-4 md:mt-6"><FaStar className="text-yellow-400 mt-1" />{movies?.vote_average?.toFixed(1)}<span className="text-gray-400">/10</span></h1>
                    <div className="flex gap-5 mt-6 md:mt-10">
                        {
                            movies?.genres && movies?.genres.length > 0 ? (movies.genres.map((items => (
                                <button className=" shadow-md p-2 text-gray-400  font-bold rounded-lg border border-gray-600">{items.name}</button>)))) : null
                        }
                    </div>
                    <h1 className="text-white text-2xl md:text-4xl font-poppins font-bold mt-6">Overview</h1>
                    <p className="md:text-xl text-gray-400 mt-6">{movies?.overview}</p>
                    <button
                        onClick={Watch.some(item => item.id === movies.id) ? handleRemoveFromWatch : handleAddtoWatch}
                        className="flex gap-2 p-4 text-xl md:text-2xl lg:text-3xl font-bold rounded-xl text-gray-600 border-2 shadow-lg mt-10 md:mt-30">
                        {
                            Watch.some(item => item.id === movies.id) ? 'Remove from WatchList' : 'Add to WatchList'
                        }
                    </button>
                </div>
            </div>
        </div>

    )
}