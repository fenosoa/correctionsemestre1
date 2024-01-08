import React, { useState, useEffect, useRef } from "react";
import { Monheader } from "./Monheader.js";
import RestoImage1 from "./kebab.jpg";
import RestoImage2 from "./kfc.jpeg";
import "./App.css";
import "./main.css";
import "./index.css";
import Logo from "./logo.svg";


import Burgers from './Burgers.js'
import { Restaurants } from "./Restaurants.js";

function App() {
    const [cart, setCart] = useState(0);
    const [restaurants, setRestaurants] = useState([
        { id: 1, name: "Restaurant 1", isOpen: false, image: RestoImage1 },
        { id: 2, name: "Restaurant 2", isOpen: true, image: RestoImage2 },
        // Ajoutez d'autres restaurants ici...
    ]);

    
    useEffect(() => {
        restaurants.forEach((restaurant) => {
            if (restaurant.isOpen) {
                console.log(`${restaurant.name} est maintenant ouvert.`);
                // Autres actions nécessaires quand un restaurant ouvre
            }
        });
    }, [restaurants]);

    const addToCart = (quantity) => {
        setCart(cart + quantity);
    };

    const removeFromCart = (quantity) => {
        setCart(cart - quantity);
    };

    const toggleRestaurantStatus = (id) => {
        setRestaurants(
            restaurants.map((restaurant) =>
                restaurant.id === id
                    ? { ...restaurant, isOpen: !restaurant.isOpen }
                    : restaurant
            )
        );
    };

    return (
        <>
            <div className='App'>
                <Monheader Logo={Logo} cart={cart} />
                <Burgers
                addToCart={addToCart}
                removeFromCart={removeFromCart} />
                <Restaurants
                restaurants={restaurants}
                toggleRestaurantStatus={toggleRestaurantStatus}/>
            </div>
        </>
    );
}
export default App;