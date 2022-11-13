import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Productcard from '../components/productcard';
import { setProducts } from '../redux/slice';
import Controller from '../api/controller';
import { GET_CATEGORY_PRODUCTS } from '../api/queries';

const Categories = () => {    

    const categorieActive = useSelector(state => state.app.categorieActive);
    const category = useSelector(state => state.app.products);
   
    const dispatch =  useDispatch();

useEffect ( () => {
    
    const variables = {input: {title: categorieActive}};
    (async ()=> {
        const {data} = await Controller(GET_CATEGORY_PRODUCTS,variables )
        dispatch(setProducts(data.category));                
    })();     
    ;        
    return () =>  dispatch(setProducts(null));  
  }, [categorieActive]);        

  console.log(category, categorieActive);
  
  return (   
        category &&            
        <section className='container'>
        <h2 className='category_title'>{category.name && category.name.toUpperCase()}</h2>
            <div className='category__section'>              
              {category.products ? 
                  category.products.map((item, index) => 
                      (<Productcard key={`_${index}`} product= {item}/>)
                  ) 
              :null}                   
            </div>
        </section>       
)
}

export default Categories;

