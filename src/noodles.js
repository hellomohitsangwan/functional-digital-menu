import Menu from "./Menu";
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";

function Noodles() {
    return (
        <div>
                            <div className="heading">
                    <h2 className="p-2 display-5 text-center">NOODLES</h2>
                </div>
            <div className="container-fluid ">

                <div className="row  justify-content-center">

                    <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={91}
                            img="/images/111hvn.jpg"
                            smallName="hakka veg noodles"
                            smallPrice={100}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={92}
                            img="/images/112hnvn.jpg"
                            smallName="hakka non veg noodles"
                            smallPrice={125}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={94}
                            img="/images/113vbn.jpg"
                            smallName="veg butter noodles"
                            smallPrice={125}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={93}
                            img="/images/114nvn.jpg"
                            smallName="non veg butter noodles"
                            smallPrice={150}
                        />    
                        
                    </div>

                    <div className="respRow col-6 col-lg-4 p-3 justify-content-center">
                        <Menu 
                            id={94}
                            img="/images/115.jpg"
                            smallName="veg chili garlic noodles"
                            smallPrice={125}

      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={95}
                            img="/images/116nvcg.jpg"
                            smallName="non veg chilli garlic noodles "
                            smallPrice={150}
      />    
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Noodles
