import Menu from "./Menu";
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";

function MCCveg() {
    return (
        <div>
                            <div className="heading">
                    <h2 className="p-2 display-5 text-center">MAIN COURSE CHINES VEG</h2>
                </div>
            <div className="container-fluid ">

                <div className="row  justify-content-center">

                    <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={81}
                            img="/images/81cmg.jpg"
                            smallName="chilli manchurian gravy"
                            smallPrice={225}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={82}
                            img="/images/82cpg.jpg"
                            smallName="chilli paneer gravy"
                            smallPrice={225}
      />    
                    </div>

                </div>
            </div>


        </div>
    )
}

export default MCCveg
