import Button from 'react-bootstrap/Button';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Meal.css';

const Meal = (props) => {
    const {idMeal,strMeal, strMealThumb, strInstructions } = props.item;
    let navigate=useNavigate();
    const handleIngredints=()=>{
        navigate(`meal/${idMeal}`)
    }
    return (
        <div className='col mt-2'>
            <main>
                <Card className='rawData'>
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Text>
                            {strInstructions.slice(15, 100)}
                        </Card.Text>
                        <Link to={`/meal/${idMeal}`}> Ingredients</Link>
                        <Button onClick={handleIngredints} variant="primary">Ingredient Details</Button>
                    </Card.Body>
                </Card>
            </main>
            <nav>

            </nav>
        </div>
    );
};

export default Meal;