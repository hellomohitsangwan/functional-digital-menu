import React, { useState } from 'react'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./CheckoutProduct.css";
import { Link } from 'react-router-dom';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    function getBasketItems (basket)
    {
      const basketItems =  basket.map(baskettt => baskettt.name)
        
        return basketItems;
    }
    const [name, setName] = useState("");
    const [tableNo, setTableNo] = useState();
    const whatsappLink = "https://api.whatsapp.com/send?phone=8398070824&text=" + " items" + " = " + getBasketItems(basket) + " total rupees" + " = " + getBasketTotal(basket) + " name" + " = " +name + " table number = " +tableNo
    

    return (
        <div className="subtotal">
            {/* total price */}

            

            
                    <div className="car">
                        <div className="card-body">
                            <h3 className="your order details"></h3>
                    <form action={whatsappLink} method="POST" enctype="text/plain">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <div className="form-group">
                                    <label for="name">Name</label>
                                    <input onChange={event => setName(event.target.value)}  type="text" name="name" class="input1 form-control"  placeholder="your name" />

                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="form-group">
                                    <label for="name">Table Number</label>
                                    <input onChange={event => setTableNo(event.target.value)} type="text" name="table no:" class="input1 form-control" placeholder="your table no" />
                                    
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="form-group">
                                    <label for="name">Your Orders</label>
                                    <textarea
                                        rows="8"
                                        cols="100"
                                        class="form-control"
                                        value={getBasketItems(basket)}
                                        name="orders"
                                        placeholder="your order"
                                        
                                        >
                                    </textarea>                                    
                                </div>
                            </div>
                             <div className="col-sm-12 col-md-6">
                                <div className="form-group">
                                    <label for="name">your subtotal</label>
                                    <input type="text" name="total MRP" value={getBasketTotal(basket)}  class="input1 form-control" placeholder="your sub-total" />
                                    
                                </div>
                            </div>
                             <div class="col-6">
                                      <div class="form-group">
                                                              <Link to="/">
                                <button className="align-center justify-content-center btn btn-primary">Add more items</button>
                            </Link>
                                      </div>
                            </div>
                                    <div class="col-6">
                                      <div class="form-group">
                                    <button onClick={() => console.log(whatsappLink)} type="submit" class="btn btn-success btn-block" >order now</button>
                                      </div>
                            </div>
                           </div>
                           
                            </form>

                        </div>
                    </div>


            {/* <p>
                Subtotal ({basket.length}) : <span>{getBasketTotal(basket)}</span>
            </p>
            {basket.map(bskt =>
            {
                return (
                    <p>{bskt.name}</p>
                )
            })} */}

            {/* checkout button */}
            {/* <button>proceed to checkout</button> */}
        </div>
    )
}

export default Subtotal
