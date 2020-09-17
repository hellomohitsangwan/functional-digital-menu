import Menu from "./Menu";
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";

function STCNveg() {
    return (
        <div>
                            <div className="heading">
                    <h2 className="p-2 display-5 text-center">STARTERS CHINES NON VEG</h2>
                </div>
            <div className="container-fluid ">

                <div className="row  justify-content-center">

                    <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={83}
                            img="/images/91ccd.jpg"
                            smallName="chilli chicken dry"
                            smallPrice={220}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={84}
                            img="/images/92lcd.jpg"
                            smallName="lemons chicken dry"
                            smallPrice={220}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={85}
                            img="/images/93doh.jpg"
                            smallName="drums of heaven"
                            smallPrice={220}
                        />    
                        
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={86}
                            img="/images/94.jpg"
                            smallName="chicken lolly pop"
                            smallPrice={220}
                        />    
                        
                    </div>

                </div>
            </div>


        </div>
    )
}

export default STCNveg
