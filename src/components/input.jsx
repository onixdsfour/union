
import React, { useState } from 'react';

const Input = ({attributes, setFormState, productId}) => {
    
    
    const handleInput = (e) => {       
        
        setFormState((state) => {
            state.id = productId;            
            state[e.target.name] = e.target.value;                     
            return state
        } )        
    }
 
    
    if(attributes.type === 'swatch') {
        return (
            <>
                <span className='input_title'>{`${attributes.name} :`}</span>
                <div className='input_wrapper-color'>                
                    {attributes? 
                        attributes.items.map((item, index)=> (
                            <div key={`-${index}`}>
                            <input  type="radio" id={item.id} className='input_color-radio'
                                            name={attributes.name} value={item.displayValue} 
                                        onChange={(e)=> handleInput(e)}                      
                                        // defaultChecked={index === 0 ? true : false}
                            /> 
                            <label  className='input_color-label' style={{backgroundColor: item.displayValue }} htmlFor={item.id}></label>
                            </div>
                                
                            
                    )): null}                            
                </div>  
            </>          
        );
    } 
    else {
        return (
        <>
            <span className='input_title'>{`${attributes.name} :`}</span>
            <div className='input_wrapper-standart'>
                {attributes? 
                    attributes.items.map((item, index)=> (
                        <div key={`-${index}`}>
                        <input  type="radio" id={item.id + '' + attributes.id} className='input_standart-radio'
                                        name={attributes.name} value={item.displayValue} 
                                    onChange={(e)=> handleInput(e)}
                                    required
                                    // defaultChecked={index === 0 ? true : false}
                        /> 
                        <label className='input_standart-label' htmlFor={item.id + '' + attributes.id}>{item.displayValue}</label>
                        </div>
                            
                        
                )): null}                            
            </div>   
        </>         
        );
    }
   
}

export default Input;
