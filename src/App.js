import React,{useState,useEffect} from 'react'
import MovieCard from './MovieCard';
import './App.css'
//import SearchIcon from "@material-ui/icons/Search";
//import SearchIcon from './search.svg'

//key 60b22b06
const API_URL="https://www.omdbapi.com?apikey=60b22b06"

const App = () => {
    const [searchTerm,setSearchTerm]=useState("");
    const [movies,setMovies]=useState([]);

    useEffect(()=>{
        searchMovies("Batman");
    },[]);

    const searchMovies = async(title)=>{
        const response= await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
  return (
    <div className='app'>
        
        <h1>Cinema Ghar</h1>
        <div className='search'>

            <input
            value ={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search For Movies"
             />
            {/* <img 
            //place searchicon
            src={Sear}
            alt="search"
            
             /> */}
             <button onClick={()=>searchMovies(searchTerm)}>search</button>
        </div>
        
        {movies?.length>0 ? (
            <div className='container'>
                {movies.map((movie)=>(
                    <MovieCard movie={movie} />
                ))}
            </div>
        ) : (
            <div className='empty'>
                <h2>Sorry! NO such movie..
                </h2>

            </div>
        )}
    </div>
  )
}

export default App