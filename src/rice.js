import Menu from "./Menu";
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";

function rice() {
    return (
        <div>
                                        <div className="heading">
                    <h2 className="p-2 display-5 text-center">RICE</h2>
                </div>
            <div className="container-fluid ">

                <div className="row  justify-content-center">

                    <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={120}
                            img="/images/121fr.jpg"
                            smallName="veg fried rice"
                            smallPrice={100}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={121}
                            img="/images/122nvfr.png"
                            smallName="non veg fried rice"
                            smallPrice={125}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={122}
                            img="/images/123vcg.jpg"
                            smallName="veg chilli garlic"
                            smallPrice={150}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={123}
                            img="/images/124nvcg.jpg"
                            smallName="non veg chilli garlic"
                            smallPrice={170}
                        />    
                        
                    </div>

                    <div className="respRow col-6 col-lg-4 p-3 justify-content-center">
                        <Menu 
                            id={924}
                            img="/images/125sr.jpg"
                            smallName="steam rice"
                            smallPrice={70}

      />    
                    </div>

                </div>
            </div>


        </div>
    )
}

export default rice
