import Menu from "./Menu";
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";

function MOMOS() {
    return (
        <div>
                            <div className="heading">
                    <h2 className="p-2 display-5 text-center">MOMOS</h2>
                </div>
            <div className="container-fluid ">

                <div className="row  justify-content-center">

                    <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={120}
                            img="/images/141svm.jpg"
                            smallName="steam veg momos"
                            smallPrice={80}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={121}
                            img="/images/142snm.png"
                            smallName="steam non veg momos"
                            smallPrice={120}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={122}
                            img="/images/143svm.webp"
                            smallName="fried veg momos"
                            smallPrice={90}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={123}
                            img="/images/144cm.jpg"
                            smallName="fried non veg momos"
                            smallPrice={130}
                        />    
                        
                    </div>

                    <div className="respRow col-6 col-lg-4 p-3 justify-content-center">
                        <Menu 
                            id={924}
                            img="/images/145tvm.jpg"
                            smallName="tandoori veg momos"
                            smallPrice={100}

      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={2323}
                            img="/images/146tnvm.jpg"
                            smallName="tandoori non veg momos"
                            smallPrice={150}
      />    
                    </div>

                </div>
            </div>


        </div>
    )
}

export default MOMOS
