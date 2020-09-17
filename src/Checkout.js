import React from 'react'
import "./Checkout.css";
import { useStateValue } from './StateProvider';
import CheckoutProducts from "./CheckoutProduct";
import { Link } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Subtotal from "./Subtotal";

function Checkout()
{

    const [{ basket }] = useStateValue();

    return (
        <div>
                                    <div>
            {basket?.length === 0 
                    ? (<div className="container-fluid"><h3>sorry🙁,you haven't order anything till now plzz,add items!</h3>
                    <Link to="/">
                                <h4 className="align-center justify-content-center">Add items</h4>
                            </Link>
                    </div>)
                : (
                        <div>
                            
                            <h2 className="checkout__title container-fluid">your orders</h2>

                        {/* list of all the added products */}
                        {basket.map(item => (
                            <CheckoutProducts 
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                price={item.price}
                            />
                            
                        ))}
                        
                                                    {basket.length > 0
                &&
                <div>
                <Subtotal />
                </div>
                 }

                    </div>
                )
                }
            </div>
            
                        {/* {basket.length > 0
                &&
                <div className="checkout__right">
                <Subtotal />
                </div>
                 } */}

        </div>
    )
}

export default Checkout
