import  {useDispatch,useSelector} from 'react-redux'
import { fetchPopularMovies } from '../slices/popular-slice'
import { useEffect } from 'react'
import Card from '../components/Card'
export default function Popular(){
    const dispatch = useDispatch()
    const Popular =useSelector(state =>state.Popular.PopularMovies)
    console.log("Popular:", Popular);


    useEffect(()=>{
        dispatch(fetchPopularMovies())
    },[dispatch])
    return(
        <div>
            <h1 className='text-purple-500 font-bold font-poppins text-4xl text-center mt-6'>Popular Movies</h1>
            <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 justify-evenly mr-6">
                {
                    Popular && Popular.length>0?(Popular.map((items)=>(<Card
                    key={items.id}
                    items={items}
                    />))):null
                }
            </div>
        </div>
    )
}