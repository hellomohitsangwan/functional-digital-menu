import Menu from "./Menu";
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";


function biryani() {
    return (
        <div>
                                        <div className="heading">
                    <h2 className="p-2 display-5 text-center">BIRYANI</h2>
            </div>
             <div className="container-fluid ">

                <div className="row  justify-content-center">

                    <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={200}
                            img="/images/4.1vb.jpg"
                            smallName="biryani veg"
                            smallPrice={200}
      />    
                    </div>
                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={201}
                            img="/images/4.2nvb.jpg"
                            smallName="biryani non veg"
                            smallPrice={250}
      />    
                    </div>

                </div>
            </div>

        </div>
    )
}

export default biryani
