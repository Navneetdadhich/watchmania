import { useState, useEffect } from 'react'
import './App.css'
import searchIcon from './search.svg'
import Card from './Card';

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=d43ae5c1';

function App() {
  const [searchItem, setSearchItem] = useState('golmaal');
  const [movies, setMovies] = useState([]);

  const SearchMov = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`)
      const data = await response.json()
      setMovies(data.Search);
      console.log(data.Search);
  }

  // hy

  useEffect(() => {
    SearchMov(searchItem);
  }, [])
  

  return (
   <div className='app'>
         <h1>Watch-Mania</h1>
          <p>{"( search the movie than click on the search button )"}</p>
         <div className='search'>
          <input  
          placeholder='search here'
          value={searchItem}
          onChange={(e)=>{setSearchItem(e.target.value)}}
          />
          <img src={searchIcon} alt="search_icon" 
          onClick={()=>{ SearchMov(searchItem);}}
          />
         </div>

        {
          movies?.length > 0 
          ? (
          <div className='container'> 
          {movies.map((movie) => 
              <Card movie={movie}/>
            )}
          </div>
          ) : (
              <div className='empty'>
                  <h2>not found - err 404</h2>
              </div>
          )
        }
   </div>
  )
}

export default App
