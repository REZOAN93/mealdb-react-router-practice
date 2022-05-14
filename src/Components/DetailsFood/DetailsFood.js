import React from 'react';
import { Badge, Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


const DetailsFood = (props) => {
    const {strMeal, strMealThumb, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6 } = props.food;
    
    let navigate=useNavigate();
    const handleBackFood=()=>{
        navigate("/")
    }

    return (
        <div className='p-3 col mt-2'>
            <Card.Img variant="top" src={strMealThumb} class="rounded mx-auto d-block" />
            <Card.Body>
                <Card.Title>{strMeal}</Card.Title>
                <Card.Text>
                    {strInstructions}
                </Card.Text>
                <h1><Badge bg="secondary">Ingredients</Badge></h1>
            </Card.Body>

            <ListGroup as="ol" numbered>
                <ListGroup.Item as="li">{strIngredient1}</ListGroup.Item>
                <ListGroup.Item as="li">{strIngredient2}</ListGroup.Item>
                <ListGroup.Item as="li">{strIngredient3}</ListGroup.Item>
                <ListGroup.Item as="li">{strIngredient4}</ListGroup.Item>
                <ListGroup.Item as="li">{strIngredient5}</ListGroup.Item>
                <ListGroup.Item as="li">{strIngredient6}</ListGroup.Item>
            </ListGroup>

            <Link to="/">Ingredient Details</Link>
            <Button onClick={handleBackFood} variant="danger">Ingredient Details</Button>
        </div>
    );
};

export default DetailsFood;