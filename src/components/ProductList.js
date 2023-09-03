// src/components/ProductList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/data')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
