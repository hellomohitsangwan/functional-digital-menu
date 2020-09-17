import Menu from "./Menu";
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";

function STCveg() {
    return (
        <div>
                            <div className="heading">
                    <h2 className="p-2 display-5 text-center">STARTERS CHINES VEG</h2>
                </div>
            <div className="container-fluid ">

                <div className="row  justify-content-center">

                    <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={71}
                            img="/images/71ff.jpg"
                            smallName="french fries"
                            smallPrice={100}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={73}
                            img="/images/72tsr.jpg"
                            smallName="tandoori spring roll"
                            smallPrice={150}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={74}
                            img="/images/73sr.jpg"
                            smallName="spring roll"
                            smallPrice={100}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={75}
                            img="/images/74hcr.cms"
                            smallName="honey chilli potatoes"
                            smallPrice={170}
                        />    
                        
                    </div>

                    <div className="respRow col-6 col-lg-4 p-3 justify-content-center">
                        <Menu 
                            id={76}
                            img="/images/75md.jpg"
                            smallName="manchurian dry"
                            smallPrice={170}

      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={77}
                            img="/images/76cp.cms"
                            smallName="chilli paneer dry"
                            smallPrice={200}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={78}
                            img="/images/77doh.jpg"
                            smallName="soya drums of heaven"
                            smallPrice={200}
      />    
                    </div>

                </div>
            </div>


        </div>
    )
}

export default STCveg
