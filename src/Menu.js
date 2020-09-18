import React, { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";
import { useStateValue } from './StateProvider'

function Menu({img , types ,smallName ,smallPrice ,mediumName ,mediumPrice ,largeName ,largePrice ,id})
{
    const [price, setPrice] = useState(smallPrice);
    const [orderName, setorderName] = useState(smallName);

    const [{ basket }, dispatch] = useStateValue();

    function addToBag()
    {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                name: orderName,
                price: price,
                image:img
            }
})
    }

    function smallClicked()
    {
        setPrice(smallPrice);
        setorderName(smallName);
    }
    function largeClicked()
    {
            setPrice(largePrice);
        setorderName(largeName);
    }
    function mediumClicked()
    {
            setPrice(mediumPrice);
        setorderName(mediumName);
}

    return (
        <div>
            

                        <div className="card" >
                <img className="card-img-top img-fluid card-image-top"  src={img} alt=""></img>
               
                <p className="menu__name">{orderName}</p>
                <div className="priceSize"> 
                    <span>{price} ₹</span>

                    {types === 3 ? 
                 (                <div className="row">
                    <div className="col-3">
                        <button onClick={smallClicked} className="myButton mx-0">quarter</button>
                    </div>
                                        <div className="col-5">
                                <button onClick={mediumClicked} className="mx-0 myButton">half</button>
                    </div>
                                        <div className="">
                        <button onClick={largeClicked} class="mx-0 myButton">full</button>
                    </div>
                    </div>) : null
                    }   
                    
                    {types === 2 ? 
                    (<div className="row">
                    <div className="col-6">
                        <button onClick={smallClicked} className="myButton mx-0">half-plate</button>
                    </div>
                                        <div className="col-6">
                        <button onClick={mediumClicked} className="mx-0 myButton">full-plate</button>
                    </div>
                        </div>) :
                    null}
                    
                </div>
                <div className="menu__button">
                <button onClick={addToBag} className="btn btn-sm btn-success btn-block">add to bag  +</button>
                </div>
                


                

                </div>
            
        </div>

    )
}


export default Menu
