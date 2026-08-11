import { FaStar } from "react-icons/fa"
import { useNavigate } from "react-router-dom"


export default function Card({items}){
 
    const navigate = useNavigate()
    return(
        <div 
        onClick={()=>navigate(`/details/${items.id}`)}
        className="cursor-pointer border-2  gap-3  h-90 mt-3 ml-5 rounded-xl border-gray-900 shadow-md">
            
            <div className="h-64">
                <img  
                className="object-cover h-73 w-full rounded-t-xl "
                src={`https://image.tmdb.org/t/p/w500${items?.poster_path}`} alt="" />
                </div>
            <div className="p-2 ">
                    <h1 className="text-white mt-8 font-bold font-poppins truncate">{items?.title}</h1>
                    <h2 className="flex items-center justify-between gap-4 whitespace-nowrap text-white font-bold">{items?.release_date.split("-")[0]} <span className="flex items-center gap-1 text-yellow-400">
                    <FaStar
                    className="text-yellow-400"
                    />{items?.vote_average?.toFixed(1)}</span></h2>
            </div>
        </div>
    )
}