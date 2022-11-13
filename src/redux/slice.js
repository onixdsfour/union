import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        categories: [],
        categorieActive: '',
        category: {},
        productActive: null,
        currencyActive: '$',
        orderedProducts: []
        
    },
    reducers: {
        setCategories(state, action){            
            console.log(action.payload);
            state.categories = action.payload.categories;
        },
        setCateg_Active(state, action){
            console.log(action.payload);
            state.categorieActive = action.payload;
        },

        setProducts(state, action){
            console.log(action.payload)
            state.products = action.payload;
        },
        setProduct_Active(state, action){
            console.log(action.payload);
            state.productActive = action.payload;
        },
        setCurrencyActive(state, action){
            console.log(action.payload);
            state.currencyActive = action.payload; 
        },
        setOrderedProducts(state, action){
            console.log(action.payload);
            state.orderedProducts.push(action.payload)
        }
    }
});

export const {
                setCategories,
                setCateg_Active, 
                setProducts,
                setProduct_Active,
                setCurrencyActive,
                setOrderedProducts
            } 
            = appSlice.actions;

export default appSlice.reducer;