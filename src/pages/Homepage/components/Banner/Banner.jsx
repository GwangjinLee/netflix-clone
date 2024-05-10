import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import './Banner.style.css'

import Alert from 'react-bootstrap/Alert';

const Banner = () => {
    const {data, isLoading, isError, error} = usePopularMoviesQuery();
    console.log('data',data);
    if(isLoading) return <div>Loading...</div>
    if(isError) return <Alert key="danger" variant="danger">{error.message}</Alert>

  return (
    <div style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.results[0].backdrop_path})`,
    }}
    className='banner'>
      <div className='text-white banner-text-area'>
        <h1>{data?.results[0].title}</h1>
        <p>{data?.results[0].overview}</p>
      </div>
    </div>
  )
}

export default Banner