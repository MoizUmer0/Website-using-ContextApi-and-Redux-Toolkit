import { Children, createContext, useState} from "react";

const UserContext =createContext()

export const UserContextProvider =(({children})=>{
    const [search,setSearch] = useState("")   
    const [Movies,setMovies] = useState([])


    async function handlesearch(){
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=869bc38c3645b3ac83a8cb4209454784&query=${search}`)
            const data = await response.json()
            console.log(data)
            
            if(data?.results){
                setMovies(data?.results)           
                setSearch("")
            }

        } catch (e) {
                console.log(e)
        }
    }
    console.log("Movies:", Movies);
    return(
        <UserContext.Provider value={{search,setSearch,Movies,setMovies,handlesearch}}>
            {children}
        </UserContext.Provider>
    )
})


export default UserContext