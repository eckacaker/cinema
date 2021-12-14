import { useEffect, useState } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import axios from 'axios';

function App() {

  const [movieList,setMovieList] = useState([]);
  const [page,setPage] = useState(1);
  useEffect(()=>{
    fetchMovies();
  },[])
  function fetchMovies($page=1,sort='popularity.desc'){
    console.log(page);
    axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=${sort}&api_key=04c35731a5ee918f014970082a0088b1&page=${$page}`)
    .then(res => {
    const data = res.data;
    setPage(data.page || $page);
    setMovieList(data.results);
      console.log(data);
    })
  }
  return (
    <div className="App">
      <Header/>
      <MovieList data={movieList} />
      <div style={{display:'flex',width:'100%','justifyContent':'center',padding:'30px'}}>
        <button onClick={()=>{setPage(page);}}>{page}</button>
        <button onClick={async()=>{
          fetchMovies(page+1);
          }}>{page + 1}</button>
        <button onClick={()=>{fetchMovies(page)}}>{page + 2}</button>
      </div>

    </div>
  );
}

export default App;
