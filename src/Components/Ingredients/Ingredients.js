import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import DetailsFood from '../DetailsFood/DetailsFood';

const Ingredients = () => {
    const {userId} = useParams();
    
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${userId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, []);
    
    return (
       <div>
           {foods.map(mp=><DetailsFood food={mp}></DetailsFood>)}
       </div>
    );
}; 

export default Ingredients;