import React,{ useState} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet, useNavigate } from 'react-router-dom';




const AppLayout = () => {
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();

    const searchByKeyword = (e) => {
        e.preventDefault();
        if(keyword){
            navigate(`/movies?q=${keyword}`);
            setKeyword('');
        }else{
            navigate('/movies');
        }
    };

  return (
    <div>
        <Navbar expand="lg"  bg="dark" data-bs-theme="dark">
            <Container fluid>
                <Link to='/'>
                <Navbar.Brand>
                    <img src='/Netflix_Logo_RGB.png' width={93}/>
                </Navbar.Brand>
                </Link>
                
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Link to='/' className='text-white me-4 link-offset-2 link-underline link-underline-opacity-0'>Home</Link>
                    <Link to='/movies'  className='text-white link-offset-2 link-underline link-underline-opacity-0'>Movies</Link>
                    
                </Nav>
                <Form className="d-flex" onSubmit={searchByKeyword}>
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    />
                    <Button variant="danger" type='submit'>Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet />
    </div>
    
  )
}

export default AppLayout