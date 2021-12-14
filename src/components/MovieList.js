import Movie from './Movie';


function MovieList(props) {
    console.log(props.data,'data')
    return (
    <div>
        <div style={{display:'flex',flexWrap:'wrap',width:'100%'}}>
        {props.data.length ? props.data.map(movie=>{
            return <Movie key={movie.id} {...movie} />
        }) : 'Yükleniyor.'}
        </div>
    </div>
       
    );
  }
  
  export default MovieList;
  