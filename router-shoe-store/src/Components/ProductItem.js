import React from 'react'
import { useParams } from "react-router-dom";
import Shoes from '../shoe.json';
import './css/ProductItem.css';
function ProductItem() {
    const { id } = useParams();
    const Shoe = Shoes[id];
    console.log(Shoe);
    if (!Shoe)
        return <h2>Page Not Found!</h2>


    return (
        <div className="container">
            <h1 className="heading">Product Preview</h1>
            <div className="product" key={id}>
                <img src={Shoe.src} alt="" />
                <h3>{Shoe.title} </h3>

            </div>
        </div>
    )
}

export default ProductItem
