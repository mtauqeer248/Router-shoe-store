import React from 'react'
import Shoes from '../shoe.json';
import './css/Products.css';
import {Link} from 'react-router-dom';
function Product() {
    console.log(Shoes);
    console.log(Object.keys(Shoes));
    return (
        <div>
            <h1>Hello Product</h1>
            <div id="product">
                {Object.keys(Shoes).map(KeyName => {

                    const Shoe=Shoes[KeyName];
                    return (
                       
                    <div className="card" key={KeyName}>
                        <img src={Shoe.src} alt=""/>
                    <h3>{Shoe.title}</h3>
                   <button><Link to={`/ProductItem/${KeyName}`}><span>Shop Now</span></Link></button> 
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Product
