export const GET_CATEGORIES = `
query All {
    categories {
        name                    
    }
}
`;

export const GET_CATEGORY_PRODUCTS = `
    query PRODUCTS ($input: CategoryInput){
        category(input: $input) {
            name
            products{
                id
                name
                category
                inStock
                id
                gallery
                prices{
                currency{
                    label
                    symbol
                }
                amount
                }
                attributes{
                    id
                    type
                    items {
                      displayValue
                }
                }
            }          
            }
        }
                    
`


export const GET_PRODUCT = `
query	product($id: String!){
    product(id: $id){
      id
      name
      inStock
      gallery
      description
      category
      attributes{
        id
        name
        type
        items{
          displayValue
          value
          id
        }
      }
      prices{
        currency{
          label
          symbol
        }
        amount      
      }
      brand       
    }  
  } 
`

export const GET_CURRENCIES = `
  query	currency{
    currencies{
      label
      symbol
    }
  }
`