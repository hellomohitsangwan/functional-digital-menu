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
                <Link to="/">
                <img className="shop__logo" src="/images/shopLogo.jpg" alt=""></img>
                </Link>

                {/* welcome line */}
                <div className="header__welcomeLine">
                <h6 className="welcomeLine_top" style={{fontWeight:664}}>welcome sir/madam</h6>
                    <p className="welcomeLine_bottom">have a nice day !</p>
                    </div>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket"  style={{ fontSize: 40 }}>
                        <ShoppingCartIcon style={{ fontSize: 38 }} />
                    <span className="header__optionLine2 header__optionBasketCount" style={{ fontSize: 38 }}>{basket?.length}</span>
                    </div>
                </Link>

            </nav>
        
    )
}

export default Header
