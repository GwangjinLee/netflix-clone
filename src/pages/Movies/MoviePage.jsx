import React from 'react'
import { useSearchMovieQuery } from '../../hooks/useSearchMovie'
import { useSearchParams } from 'react-router-dom';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';

// 경로 2가지.
// navbar에서 온경우 popular 영화를 보여줌.
// keyword에서 온경우 keyword 와 관련된 영화를 보여줌.

//페이지네이션 설치
// 페이지 state 만들기.
// 페이지네이션 클릭 시 페이지 바꾸기
// 페이지값이 바뀔때 useSearchMovie page 넣어서 fetch 하기


// 필터
// 1. 장르
// 2. 인기순 정렬
// 3. 평점순 정렬
const MoviePage = () => {

  const [query, setQuery] = useSearchParams();
  const [page, setPage] = React.useState(1);

  const keyword = query.get('q');
  const {data, isLoading, isError, error} = useSearchMovieQuery({keyword,page});

  const handlePageClick = ({selected}) => {
    console.log('page',selected+1);
    setPage(selected+1);
  };
  
  if(isLoading){
    return (<div> 
    {/* <Spinner animation="border" variant="danger" style={{width: "5rem", height: "5rem}}/> */}
   </div>)
   } 
  if(isError) return <Alert variant='danger'>{error.message}</Alert>

 

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>필터</Col>
        <Col lg={8} xs={12}>
          <Row>
          {data?.results.map( (movie,index) =><Col key={index} lg={4} xs={12}><MovieCard movie={movie}></MovieCard></Col> )}
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={data.total_pages}//전체페이지
            forcePage={page-1}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default MoviePage