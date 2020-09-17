import Menu from "./Menu";
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";

function STNVeg() {
    return (
        <div>
                            <div className="heading">
                    <h2 className="p-2 display-5 text-center">STARTERS NON VEG</h2>
                </div>
            <div className="container-fluid ">

                <div className="row  justify-content-center">

                    <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={31}
                            img="/images/3.1tc.jpg"
                            smallName="tandoori chicken"
                            smallPrice={280}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={33}
                            img="/images/3.2ac.jpg"
                            smallName="afgani chicken"
                            smallPrice={330}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={34}
                            img="/images/3.3bc.webp"
                            smallName="bhatti chicken"
                            smallPrice={350}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={25}
                            img="/images/3.4ppc.jpg"
                            smallName="peri peri chicken"
                            smallPrice={350}
                        />    
                        
                    </div>

                    <div className="respRow col-6 col-lg-4 p-3 justify-content-center">
                        <Menu 
                            id={36}
                            img="/images/3.5ct.jpg"
                            smallName="chicken tikka"
                            smallPrice={230}

      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={37}
                            img="/images/3.6cm.jpg"
                            smallName="chicken malai tikka"
                            smallPrice={250}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={38}
                            img="/images/3.7bc.jpg"
                            smallName="bhatti chicken tikka"
                            smallPrice={250}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={39}
                            img="/images/3.8cp.jpg"
                            smallName="peri peri chicken tikka"
                            smallPrice={250}
      />    
                    </div>
                                                            <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={40}
                            img="/images/3.9ct.webp"
                            smallName="chicken tangri"
                            smallPrice={310}
      />    
                    </div>
                                                                                <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={41}
                            img="/images/3,10cmt.jpg"
                            smallName="chicken malai tangi"
                            smallPrice={330}
      />    
                    </div>

                </div>
            </div>


        </div>
    )
}

export default STNVeg
