import React from 'react';
import { useCarrito } from './CarritoContext'; 
import './styles/Menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
    const { addToCarrito } = useCarrito(); 

    const handleAgregarPizza = (pizza) => {
        addToCarrito(pizza); 
    };

    const pizzas = [
        {
            id: 1,
            name: 'Pizza Margherita',
            description: 'Deliciosa pizza con tomate, mozzarella y albahaca fresca.',
            price: '20.000 COP',
            image: '/images/margherita.png', 
        },
        {
            id: 2,
            name: 'Pizza Pepperoni',
            description: 'Pizza clásica con abundante pepperoni y queso.',
            price: '22.000 COP',
            image: '/images/pepperoni.png', 
        },
        {
            id: 3,
            name: 'Pizza Cuatro Quesos',
            description: 'Mezcla de cuatro quesos: mozzarella, cheddar, azul y parmesano.',
            price: '24.000 COP',
            image: '/images/cuatroquesos.png', 
        },
    ];

    return (
        <div className="menu-container">
            <h1 className="menu-title">Menú de Pizzas</h1>
            <Link to="/" className="regresar-button">Regresar al Inicio</Link>
            <div className="pizza-list">
                {pizzas.map(pizza => (
                    <div key={pizza.id} className="pizza-item">
                        <img src={pizza.image} alt={pizza.name} className="pizza-image" />
                        <h2 className="pizza-name">{pizza.name}</h2>
                        <p className="pizza-description">{pizza.description}</p>
                        <p className="pizza-price">{pizza.price}</p>
                        <button className="agregar-button" onClick={() => handleAgregarPizza(pizza)}>Agregar al Carrito</button>
                    </div>
                ))}
            </div>
            <Link to="/carrito" className="continuar-button">Continuar al Carrito</Link>
        </div>
    );
};

export default Menu;




