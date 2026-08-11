import { useContext } from "react"
import HeroImage from "/src/assets/HeroImage.jpg"
import UserContext from "../components/UserContext"
import Card from "../components/Card"
import {Link} from 'react-router-dom'
export default function Home() {
    const {search,setSearch,handlesearch,Movies,setMovies} =useContext(UserContext)
    return (

        <div className="w-full h-[920px]">
            <img
                className="object-cover w-full h-full rounded-b-xl"
                src={HeroImage} alt="" />
            <div className="text-white absolute inset-0 flex flex-col items-center justify-center  ">
                <div className="w-[90%] sm:w-[80%] md:w-[65%] lg:w-1/3 flex flex-col">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-bold font-poppins whitespace-nowrap ">Find Movies </h1>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-poppins mt-2 whitespace-nowrap">You`ll <span className="text-purple-500 ">Love</span></h1>
                    <p className="mt-4 text-lg sm:test-xl md:text-2xl text-gray-400">Search from thousand of movies<br />and add to your wishlist</p>
                    <div className="w-full flex gap-2 mt-6">
                        <input
                            className="flex-1 bg-white  p-1 lg:p-4 md:p-3 sm:p-2 text-black rounded-lg  focus:outline-none"
                            type="text"
                            placeholder="Search movies..."
                            value={search}
                            onChange={(e)=>setSearch(e.target.value)}

                        />
                        <button 
                        onClick={handlesearch}
                        className="bg-purple-500 font-bold text-xl p-3 text-white rounded-lg">search</button>
                    </div>
                </div>
            </div>
            {/* <div className="flex justify-between py-4 px-6">
                <h1 className="text-white font-bold text-2xl">Popular</h1>
                <Link  
                to='/popular'
                className="text-purple-500">View All</Link>
            </div> */}
            <div>
                 <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 justify-evenly  mt-10 mr-6">
                    {
                        Movies && Movies.length>0?Movies.map((movie)=>(<Card  
                        key={movie.id}
                        items={movie}
                        />)): null
                    }
            </div>
            </div>
        </div>
    )
}