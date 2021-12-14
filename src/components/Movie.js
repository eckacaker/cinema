
function Movie({title,backdrop_path,vote_average}) {
    const IMG_API = 'https://image.tmdb.org/t/p/w500/';
    return (
        <div style={{width:'calc(33% - 10px)',paddingLeft:'5px',paddingRight:'5px'}}>
            <img style={{width:'100%'}} src={IMG_API + backdrop_path}/>
        </div>
    );
  }
  
  export default Movie;
  