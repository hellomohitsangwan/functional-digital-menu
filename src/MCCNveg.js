import Menu from "./Menu";
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";

function MCCNveg() {
    return (
        <div>
                            <div className="heading">
                    <h2 className="p-2 display-5 text-center">MAIN COURSE CHINES NON VEG</h2>
                </div>
            <div className="container-fluid ">

                <div className="row  justify-content-center">

                    <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={89}
                            img="/images/101ccg.jpg"
                            smallName="chilli chicken gravy"
                            smallPrice={250}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={90}
                            img="/images/102lcg.jpg"
                            smallName="lemons chicken gravy"
                            smallPrice={250}
                        />    
                        

                </div>
            </div>

</div>
        </div>
    )
}

export default MCCNveg
