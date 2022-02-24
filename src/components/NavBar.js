import React, { useState } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
// import { GetMoviesByName } from '../helpers/GetMoviesByName'
import { logoutAsync } from '../redux/actions/actionLogin'
// import { listMoviesAsync, listMoviesSync } from '../redux/actions/actionMovies'
import { searchTerm } from '../redux/actions/actionSearch'

const NavBar = () => {

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutAsync())
  }

  const [search, setSearch] = useState({
    busqueda: ''
  })

  const { busqueda } = search
  // const resultSearch = GetMoviesByName(busqueda)
  // console.log(resultSearch);

  const handleInputChange = ({ target }) => {
    setSearch({
      ...search,
      [target.name]: target.value
    })
    // console.log(busqueda);
    dispatch(searchTerm(busqueda))
  }


  const handlesubmit = (e) => {
    e.preventDefault()
    // dispatch(listSearch(resultSearch))
  }


  return (
    <Navbar style={{ padding: '10px 90px 0px 90px ' }} expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1638920590/logo-blockBuster_apegqx.png"
              width="auto"
              height="64"
              className="d-inline-block align-top"
              alt="Block master"
            />
          </Link>

        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto mx-3 my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" style={{ color: '#FED941' }} >Todas</Nav.Link>
            <Nav.Link as={Link} to="/favoritos" style={{ color: '#FED941' }} >Favoritos</Nav.Link>
            {/* <Nav.Link as={Link} to="/register" style={{ color: '#FED941' }} >Registro</Nav.Link>
            <Nav.Link as={Link} to="/login" style={{ color: '#FED941' }} >Login</Nav.Link>
            <Nav.Link style={{ color: '#FED941' }} onClick={() => handleLogout()}>Logout</Nav.Link> */}
            {/* <Nav.Link as={Link} to="/new" style={{ color: '#FED941' }} >Nueva Pelicula</Nav.Link> */}
            <NavDropdown  className='text-warning' style={{ backgroundColor: '#FED941' }} title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/login"  >Login</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/register"  >Registro</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/new"  >Nueva Pelicula </NavDropdown.Item>
              <NavDropdown.Item  onClick={() => handleLogout()}>Logout</NavDropdown.Item>
            </NavDropdown>


          </Nav>
          <Form className="d-flex"
            onSubmit={handlesubmit}
          >
            <FormControl
              variant="outline-warning"
              placeholder="Busca tu pelicula favorita"
              className="me-2 px-3"
              name='busqueda'
              value={busqueda}
              onChange={handleInputChange}
            />
            <Button variant="outline-warning" className="px-3"><BsSearch className='bg-transparent' /></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar