import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
    
const ProductList = (props) => {
    return (
        <div>
            {props.products.map( (product, i) =>
                <Link to ={`/products/${product._id}`}>
                    <p key={i}>{product.title}</p>
                </Link>
            )}
        </div>
    )
}
    
export default ProductList;

