import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setOrderedProducts } from '../redux/slice';


const Productcard = ({product}) => {
    const dispach = useDispatch();
    const currencyActive = useSelector(state => state.app.currencyActive);  
    const amount = product.prices.find(item => item.currency.symbol === currencyActive).amount;

    const handleCart = (e, id) => {
        e.preventDefault();
        dispach(setOrderedProducts({id: id}))
        console.log(id);        
    }

    return (
       <Link to={`/${product.category}/${product.id}`} style= {{textDecoration : 'none', color: 'black'}}>        
        <div className= 'product__card'
        // {product.inStock ? 'product__card' : 'product_cart-absent'}          
        >
            
            <img style={{height :330, width:354, objectFit: 'contain'}} 
                className='product__card--image' 
                src={product.gallery[0]} 
                alt="product"
            />
            <div className='bucket-button' 
                onClick={(e)=> handleCart(e, product.id)}
            >
                <img src="./images/bucket.svg" alt="bucket" />
            </div>
            <p>{product.name}</p>            
            <p>{currencyActive +" "+ amount}</p>
            
        </div>
       </Link>
    );
}

export default Productcard;
