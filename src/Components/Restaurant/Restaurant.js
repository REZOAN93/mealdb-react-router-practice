import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Meal from '../Meal/Meal';
import './Restaurant.css'

const Restaurant = () => {
    const [searchMeal, setSearchMeal] = useState('')
    const [items, setItems] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`;
        fetch(url)
            .then(response => response.json())
            .then(json => setItems(json.meals))
    }, [searchMeal])

    const searchItemHandler = n => {
        const searchItem = n.target.value;
        setSearchMeal(searchItem)

    }
    return (
        <div className='container'>
            <div className='meal-search'>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/home" >Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" >About</Nav.Link>
                            <Nav.Link href="/">Food</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <input onChange={searchItemHandler} placeholder='Search Your Meal here' type="text" />
                            
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                
            </div>
            <div className=' row row-cols-1  row-cols-md-3 row-cols-lg-4  pt-5 '>
                {
                    items.map(mp=><Meal item={mp} key={mp.idMeal}></Meal>)
                }
            </div>


        </div >
    );
};

export default Restaurant;