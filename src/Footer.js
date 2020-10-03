import React from 'react';
import "./Footer.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Footer() {
    return (
        <div className="footer">
            <div className="row text-center">
                <div className="container">
                    <div className="col my-2 footer_text">
                      <h5>&copy; <span>2017 - </span> <span>{new Date().getFullYear()}</span></h5>
                      <p>It is completely made my <a href="https://hellomohitsangwan.github.io/ms" style={{textDecoration:"underline"}}>mohit sangwan</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
