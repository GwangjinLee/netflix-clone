import React from 'react'
 
import { Alert } from 'bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRatedMovies';

const TopratedMovieSlide = () => {
    const {data, isLoading, isError, error} = useTopRatedMoviesQuery();

    if(isLoading) return <div>Loading...</div>
    if(isError) return <Alert key="danger" variant="danger">{error.message}</Alert>


  return (
    <div>
        <MovieSlider title='Top rated Movies' movies={data.results} responsive={responsive}/>
    </div>
  )
}

export default TopratedMovieSlide