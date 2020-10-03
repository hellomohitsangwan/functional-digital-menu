import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';
function CheckoutProduct({id, name, price, image })
{
        const [{ basket }, dispatch] = useStateValue();
    function removeFromBasket()
    {
                dispatch({
            type: "REMOVE_FROM_BASKET",
            id:id
         })
    }
    return (
        <div>
                    <div className="checkoutProducts">
            <img className="checkoutProduct__image" src={image} alt=""></img>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {name}
                </p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <button onClick={removeFromBasket}>Remove this orders</button>
            </div>
        </div>
        </div>
    )
}

export default CheckoutProduct
