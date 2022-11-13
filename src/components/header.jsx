import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories, setCateg_Active} from '../redux/slice';
import { GET_CATEGORIES} from '../api/queries';
import Controller from '../api/controller';
import { useNavigate, useParams } from 'react-router-dom';
import CurrencySelect from './curencySelect';

const Header = () => {
    console.log('in header');
    const navigate = useNavigate();   
    const dispatch = useDispatch();
    const {category} = useParams();
    const categories = useSelector(state => state.app.categories);
    const orderCount = useSelector(state => state.app.orderedProducts);

    const categorieActive = useSelector(state => state.app.categorieActive);   
    
    useEffect( () => {            
        ( async ()=> {
            const {data} = await Controller(GET_CATEGORIES);
            dispatch(setCategories(data));
            console.log(data);
            dispatch(setCateg_Active(category? category : data.categories[0].name));                
        })();                    
    }, []);

    const СategorieHandler = (name) => {
        dispatch(setCateg_Active(name));
        navigate(`/${name}`);
    }
    console.log(categories,categorieActive);
    console.log(orderCount);
    
    return (         
        
        <header className='header container'>
            <ul className='category__nav'>
                {categories ? categories.map((item,index) => (
                    <li
                        key={`_${index}`}
                        onClick = {() => СategorieHandler(item.name)}
                        className = {`${categorieActive === item.name ? 'active category__item' : 'category__item'}`}
                    >
                        {item.name.toUpperCase()}                         
                    </li>                
                )) : null}              
            </ul>
            <div className='header__center'>
                <img src='/images/a-logo.svg'  alt="back"></img> 
            </div>
            <div className='heder__right--side'>
                <CurrencySelect/>
                <div className='bucket__svg'>
                <img src="/images/EmptyCart.svg" alt="cart" />
                    <div style={{display : (!orderCount.length && 'none')}}
                        className='order_count'>{orderCount && orderCount.length}</div>
                </div>
            </div>
        </header>
    );
}

export default Header;
