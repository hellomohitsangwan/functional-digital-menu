import Menu from "./Menu";
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";

function STVeg() {
    return (
        <div>
                            <div className="heading">
                    <h2 className="p-2 display-5 text-center">STARTERS VEG</h2>
                </div>
            <div className="container-fluid ">

                <div className="row  justify-content-center">

                    <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={21}
                            img="/images/2.1pt.jpg"
                            smallName="paneer tikka"
                            smallPrice={180}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={23}
                            img="/images/2.1pmt.jpg"
                            smallName="paneer malai tikka"
                            smallPrice={190}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={24}
                            img="/images/2.3phb.jpg"
                            smallName="paneer hara bhara"
                            smallPrice={190}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={25}
                            img="/images/2.4sc.webp"
                            smallName="soya chaap tikka"
                            smallPrice={160}
                        />    
                        
                    </div>

                    <div className="respRow col-6 col-lg-4 p-3 justify-content-center">
                        <Menu 
                            id={26}
                            img="/images/2.5smc.jpg"
                            smallName="soya malai tikka"
                            smallPrice={170}

      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={27}
                            img="/images/2.6sbc.jpg"
                            smallName="soya bhatti chaap"
                            smallPrice={180}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={28}
                            img="/images/2.7btc.jpg"
                            smallName="butter tandoori chaap"
                            smallPrice={170}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={29}
                            img="/images/2.8mt.jpg"
                            smallName="mushroom tikka"
                            smallPrice={200}
      />    
                    </div>
                                                            <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={30}
                            img="/images/2.9md.jpg"
                            smallName="mushroom duplex"
                            smallPrice={250}
      />    
                    </div>

                </div>
            </div>


        </div>
    )
}

export default STVeg
