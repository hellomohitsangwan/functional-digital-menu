import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
function Header()
{
    const [{ basket }] = useStateValue();
    return (
        
            <nav className="header">
                {/* shop logo */}
                <Link to="/" className="header__logo">shop logo</Link>

                {/* welcome line */}
                <div className="header__welcomeLine">
                <h6 className="welcomeLine_top">welcome to our restaurent</h6>
                    <p className="welcomeLine_bottom">have a nice day !</p>
                    </div>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingCartIcon />
                    <span className="header__optionLine2 header__optionBasketCount">{basket?.length}</span>
                    </div>
                </Link>

            </nav>
        
    )
}

export default Header
