import Menu from "./Menu";
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";

function Rrolls() {
    return (
        <div>
                            <div className="heading">
                    <h2 className="p-2 display-5 text-center">ROMMALI ROLLS</h2>
                </div>
            <div className="container-fluid ">

                <div className="row  justify-content-center">

                    <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={61}
                            img="/images/6.1sr.jpg"
                            smallName="soya rolls"
                            smallPrice={170}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={63}
                            img="/images/6.2ptr.jpg"
                            smallName="paneer tikka roll"
                            smallPrice={180}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={64}
                            img="/images/6.3mtr.webp"
                            smallName="mushroom tikka roll"
                            smallPrice={190}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={65}
                            img="/images/6.4csk.jpg"
                            smallName="chicken seekeh roll"
                            smallPrice={170}
                        />    
                        
                    </div>

                    <div className="respRow col-6 col-lg-4 p-3 justify-content-center">
                        <Menu 
                            id={66}
                            img="/images/6.5ctr.jpg"
                            smallName="chicken tikka roll"
                            smallPrice={200}

      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={67}
                            img="/images/6.6msr.jpg"
                            smallName="mutton seekeh roll"
                            smallPrice={220}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={28}
                            img="/images/6.7mt.jpg"
                            smallName="mutton tikka"
                            smallPrice={250}
      />    
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Rrolls
