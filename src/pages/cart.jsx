import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const orderedProducts = useSelector(state => state.app.orderedProducts);
    
    return (
        <section className='container cart_section'>
            {orderedProducts && orderedProducts.map((item, index)=> (
                <span key={`_${index}`}>{item.id}</span>
            ))}
        </section>
    );
}

export default Cart;
