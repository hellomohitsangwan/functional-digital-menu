import Menu from "./Menu";
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";

function MCVeg() {
    return (
        <div>
                            <div className="heading">
                    <h2 className="p-2 display-5 text-center">MAIN COURSE VEG</h2>
                </div>
            <div className="container-fluid ">

                <div className="row  justify-content-center">

                    <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={51}
                            img="/images/5.1dm.jpg"
                            smallName="dal makhni"
                            smallPrice={160}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={53}
                            img="/images/5.2mv.jpg"
                            smallName="mix veg"
                            smallPrice={170}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={54}
                            img="/images/5.3sp.jpg"
                            smallName="shahi paneer"
                            smallPrice={180}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={55}
                            img="/images/5.4kp.jpg"
                            smallName="kadai paneer"
                            smallPrice={190}
                        />    
                        
                    </div>

                    <div className="respRow col-6 col-lg-4 p-3 justify-content-center">
                        <Menu 
                            id={26}
                            img="/images/5.5bmp.jpg"
                            smallName="butter masala paneer"
                            smallPrice={190}

      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={57}
                            img="/images/5.6scm.jpg"
                            smallName="soya chaap masala"
                            smallPrice={180}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={28}
                            img="/images/5.7gjd.jpg"
                            smallName="ghar jaise dal"
                            smallPrice={150}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={29}
                            img="/images/5.8mm.jpg"
                            smallName="mushroom masala"
                            smallPrice={190}
      />    
                    </div>

                </div>
            </div>


        </div>
    )
}

export default MCVeg
