import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PizzaList = () => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/pizzas')
            .then(response => setPizzas(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>Menú de Pizzas</h1>
            <ul>
                {pizzas.map(pizza => (
                    <li key={pizza.id}>{pizza.name} - ${pizza.price}</li>
                ))}
            </ul>
        </div>
    );
}

export default PizzaList;
