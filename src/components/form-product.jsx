import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cart from '../pages/cart';
import Input from './input';
import { setOrderedProducts } from '../redux/slice';


const FormProduct = ({product}) => {
    const [formState, setFormState] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currencyActive = useSelector(state => state.app.currencyActive);
    console.log(currencyActive);   
    const amount = product.prices.find(item => item.currency.symbol === currencyActive).amount;
    console.log(amount);
    
    const handlerForm = (e) => {
        e.preventDefault();
        dispatch(setOrderedProducts(formState));        
        navigate(`/cart`);
    } 
    return (
        <form onSubmit={(e)=> handlerForm(e)} className='form_prodct' >
                <div className='product_discription-aside'>
                    <h3 className='product_title-aside'>{product.name}</h3>
                    {product.attributes ? product.attributes.map((item, index)=> (
                        <Input key={`_${index}`} 
                            setFormState={setFormState} attributes = {item}
                            productId ={product.id}
                        />
                    )) 
                    : null}    
                    <p style={{fontWeight : 'bold', marginBottom: 10 }}>price:</p>
                    <p style={{fontWeight : 'bold', marginBottom: 10 }}>{currencyActive +" "+ amount}</p>               
                    <button  className='form_add-button'>ADD TO CART</button>
                    
                </div>
                
        </form>
    );
}

export default FormProduct;
