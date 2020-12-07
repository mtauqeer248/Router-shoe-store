import React from 'react'
import Image from './svg/pexels-cnma-345415.jpg';
import {Link} from 'react-router-dom';
import './css/Home.css';
function Home() {
    return (
        <div className="banner">
            
            <img src={Image} alt="" width="100%" height="auto" />
            <button><Link to="/product"><span>Shop Now</span></Link></button>
          
        </div>
    )
}

export default Home
