
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom'

import AppLayout from './layout/AppLayout'
import AdminLayout from './layout/AdminLayout'
import Homepage from './pages/Homepage/Homepage'
import MoviePage from './pages/Movies/MoviePage'
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage'
import NotFoundPage from './pages/NotFoundpage/NotFoundPage'


// 홈페이지 : /
// 영화 전체 보여주는 페이지 ( 서치 ) : /movies
// 영화 상세 페이지 : /movies/:id
// 추천영화 페이지 : /movies/:id/recommendations
// 리뷰 : /movies/:id/reviews

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout/>} > // user 화면
        <Route index element={<Homepage/>} />
        <Route path="movies">
          <Route index element={<MoviePage/>} />
          <Route path=":id" element={<MovieDetailPage/>} />
        </Route>
       
      </Route>
      

      <Route path="/admin" element={<AdminLayout/>}> // admin 화면
      </Route>

      <Route path="*" element={<NotFoundPage/>} />

    </Routes>
  );
}

export default App;
