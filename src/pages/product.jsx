
import { useEffect } from 'react';
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Controller from '../api/controller';
import { GET_PRODUCT } from '../api/queries';
import { useParams} from 'react-router-dom';
import { setProduct_Active } from '../redux/slice';
import FormProduct from '../components/form-product';


const Product = () => {
    console.log('in product')
    const [imgSelected, setSelectedImage] = useState('');    
    const {id} = useParams();
    const product =  useSelector( state => state.app.productActive);  
    const dispatch = useDispatch();
    

    useEffect(() => {
        
       (async ()=> {
            const variables = {id: id}; 
            const {data} = await Controller(GET_PRODUCT,variables ); 
                     
            dispatch(setProduct_Active(data.product));                
        })();  

        return () => dispatch(setProduct_Active(null));
    },[])

    const handleImg = (e) => {
        setSelectedImage(e.target['src'])
    }
    
   
    

    return (
        <>   
        {product? 
            <section className='container product_section'>
            <div className='gallery-aside'>    
                <ul>
                    {product.gallery.map((item, index) => (
                        <div key={`_${index}`} className='side_product-image' 
                            
                        >
                            <img src={item} alt="product" onClick={(e)=> handleImg(e)}/>
                        </div>
                    ))}
                </ul>            
            </div>
            <div className='main_product-image'>
                <img src={imgSelected ? imgSelected : product.gallery[0]} alt="main-product" />
            </div>
            <FormProduct product={product}/>
            
         </section>
        
        : null}     
         
        </>
    );
}

export default Product;



// <span style={{display: 'block', marginBottom : 20}}>{product.attributes[1].id}</span>
//                     <div className='input_group'>                            
//                             {product? 
//                                 product.attributes[1]?.items.map((item, index)=> (
//                                   <div key={`-${index}`}>
//                                     <input  type="radio" id={`size${index}`} className='input_size-radio'
//                                                  name='size' value={item.displayValue} 
//                                                 onChange={(e)=> handleInput(e)}
//                                     /> 
//                                     <label className='input_size-label' htmlFor={`size${index}`}>{item.displayValue}</label>
//                                   </div>
                                        
                                    
//                             )): null}                            
//                         </div>    
//                         <span style={{display: 'block', marginBottom : 20}}>{product.attributes[0].id}</span>
//                         <div className='input_group'>
//                             {product? 
//                                 product.attributes[0]?.items.map((item, index)=> (
//                                   <div key={`-${index}`}>
//                                     <input  type="radio" id={`size${index}`} className='input_size-radio2'
//                                                  name='size' value={item.displayValue} 
//                                                 onChange={(e)=> handleInput(e)}
//                                     /> 
//                                     <label className='input_size-label2' htmlFor={`size${index}`} style={{

//                                         backgroundColor: item.displayValue
//                                     }}></label>
//                                   </div>
                                        
                                    
//                             )): null}                            
//                         </div>      