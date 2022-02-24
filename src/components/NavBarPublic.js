import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const NavBarPublic = () => {
  return (
    <Navbar style={{ padding: '10px 90px 0px 90px ' }} expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
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
            <Nav.Link as={Link} to="/" style={{ color: '#FED941' }} href="#action1">BlockMaster</Nav.Link>
          </Nav>
          <Form className="d-flex"
          // onSubmit={handleSubmit} 
          >
            <FormControl
              variant="outline-warning"
              type="search"
              placeholder="Busca tu pelicula favorita"
              className="me-2 px-3"
              aria-label="Search"
            // value={busqueda}
            // onChange={handleChange}
            />
            <Button variant="outline-warning" className="px-3"><BsSearch /></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarPublic