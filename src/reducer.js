  export const initialState = {
     basket: [],
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);


function reducer(state, action)
{
    console.log(action);
    switch(action.type)
    {
        
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket , action.item],
            }
            
        case "REMOVE_FROM_BASKET":
            //Logic for removing from the basket
            
                        let newBasket = [...state.basket];

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            if (index >= 0)
            {
                //item exists in the basket
                newBasket.splice(index, 1);
            } else
            {
                console.warn(
                    "cant remove product of"
                )
            }
            return {
                ...state, 
                basket:newBasket,
            }

        default:
            return state;
    }
}

export default reducer; 