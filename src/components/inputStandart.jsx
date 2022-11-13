import React from 'react';

const InputStandart = ({product}) => {
    
    // return (
    //     <div className='input_wrapper-standart'>
    //         {product? 
    //             product.attributes[0]?.items.map((item, index)=> (
    //                 <div key={`-${index}`}>
    //                 <input  type="radio" id={`standart${index}`} className='input_standart-radio'
    //                                 name='size' value={item.displayValue} 
    //                             // onChange={(e)=> handleInput(e)}
    //                 /> 
    //                 <label className='input_standart-label' htmlFor={`standart${index}`}>{item.displayValue}</label>
    //                 </div>
                        
                    
    //         )): null}                            
    //     </div>            
    // );
}

export default InputStandart;
