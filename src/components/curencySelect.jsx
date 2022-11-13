import { GET_CURRENCIES } from '../api/queries';
import { useState, useEffect, useRef} from 'react';
import Controller from '../api/controller';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrencyActive } from '../redux/slice';

const CurrencySelect = () => {
    
    const dispatch = useDispatch();
    const ulSelectRef = useRef();
    const [currencies, setCurrencies] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const currencySymbolActive = useSelector(state => state.app.currencyActive);
  

    useEffect( () => {            
        ( async ()=> {
            const {data} = await Controller(GET_CURRENCIES);
            setCurrencies(data.currencies);                            
        })();    
                        
    }, []);


    useEffect(() => {
        
        if(!isActive) return;

        const handleSelect = (e) => {            
            if(!ulSelectRef.current) return;
            if(!ulSelectRef.current.contains(e.target)) setIsActive(false);                       
        };

        document.addEventListener('click' , handleSelect);

        return () => {
            document.removeEventListener('click' , handleSelect)
        }
    }, [isActive]);

    const currenciesToggle = (e) => {
        e.stopPropagation();           
        setIsActive(prev => !prev);              
    };

    const setCurrency = (e) => {  
        e.stopPropagation();        
        setIsActive(false);         
        dispatch(setCurrencyActive(e.target.id));
    };

    return (
        <div className='currency_menu'>
           <div 
                onClick={(e) => currenciesToggle(e)}
                className={isActive ? 'currency_select active' : 'currency_select'}
            >
                <span className='select_label'>{currencySymbolActive}</span>
                <div className='arrow_toggle' >^</div>
                <ul className='currency_list' ref = {ulSelectRef}>
                {currencies? currencies.map((item, index) => (
                    <li key={`_${index}`} id={item.symbol}  
                        onClick = {(e) => setCurrency(e)} 
                        className='currency_item'>
                        {item.symbol +` `+ item.label}
                    </li>
                )) 
                :null}
           </ul>
           </div>           
          
        </div> 
    );
}

export default CurrencySelect;
