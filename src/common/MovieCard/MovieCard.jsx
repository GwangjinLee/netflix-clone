import React from 'react'
import { Badge } from 'react-bootstrap'
import './MovieCard.style.css'
import { useMovieGenreQuery } from '../../hooks/useMovieGenre'

const MovieCard = ({movie}) => {

  const {data:genreData} = useMovieGenreQuery();

  const showGenre = (genreIdList) => {
    if(!genreIdList) return [];
    const genreNameList = genreIdList.map(id => {
      const genre = genreData?.find(genre => genre.id === id);
      return genre?.name;
    });
    return genreNameList;
    };

  

  return (
    <div style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
    }}
    className='movie-card'>
        <div className='overlay'>
            <h3>{movie.title}</h3>
            {showGenre(movie.genre_ids).map((genre,index)=><Badge key={index} bg='danger'>{genre}</Badge>)}
            <div >
                <div>{movie.vote_averrage}</div>
                <div>{movie.popularity}</div>
                <div>{movie.release_date}</div>
                <div>{movie.adult ? 'over18':'under18'}</div>
            </div>
        </div>
    </div>
  )
}

export default MovieCard