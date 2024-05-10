import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'
import TopratedMovieSlide from './components/TopratedMovieSlide/TopratedMovieSlide'
import UpcomingMovieSlide from './components/UpcomingMovieSlide/UpcomingMovieSlide'

// 1.배너 - top popular movie first item
// 2. popular movie
// 3. top rated movie
// 4. upcoming movie
const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
      <TopratedMovieSlide />
      <UpcomingMovieSlide />
    </div>
  )
}

export default Homepage