
const Controller = async (query , variables) => {  

    const url = 'http://localhost:4000/';

    let options = {
      method : 'POST',
      headers : {
        'Content-type': 'application/json; charset=UTF-8',
      }
    };

    if(!variables) {
        options.body = JSON.stringify({query: query})                
    } else {
        options.body = JSON.stringify({
            query: query,
            variables: variables
        })
    };

    try {
    
        let request = await fetch(url, options);
        let response = await request.json();
        
        return response;
    
    } catch (err) {
        console.log(err);
    };
    
}
export default Controller;


// fetch('http://localhost:4000/', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         query: `
//         query category($input: CategoryInput){
//             category(input: $input) {
//                 name
//                 products{
//                   name
//                   id
//                   gallery
//                   prices{
//                     currency{
//                       symbol
//                     }
//                     amount
//                   }
//                   attributes{
//                     items {
//                       displayValue
//                     }
//                   }
//                 }          
//               }
//           }
                      
//         `,
//         variables: {
//             input: {
//                 title: categorieActive
//             }
//         },
//     }),
//     })
//     .then((res) => res.json())