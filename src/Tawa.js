import Menu from "./Menu";
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";

function Tawa() {
    return (
        <div>
                            <div className="heading">
                    <h2 className="p-2 display-5 text-center">TAWA</h2>
                </div>
            <div className="container-fluid ">

                <div className="row  justify-content-center">

                    <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={2}
                            img="/images/1.1n.webp"
                            smallName="chicken tikka special"
                            smallPrice={300}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={3}
                            img="/images/1.2mt.jpg"
                            smallName="mutton tikka special"
                            smallPrice={350}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={4}
                            img="/images/1.3pt.jpg"
                            smallName="paneer tikka special"
                            smallPrice={270}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={5}
                            img="/images/1.4n.webp"
                            smallName="soya chaap special"
                            smallPrice={250}
                        />    
                        
                    </div>

                    <div className="respRow col-6 col-lg-4 p-3 justify-content-center">
                        <Menu 
                            id={1}
                            img="/images/1.5cs.jpg"
                            smallName="chicken seekeh special"
                            smallPrice={230}

      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={6}
                            img="/images/1.6ms.jpg"
                            smallName="mutton seekeh special"
                            smallPrice={250}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={7}
                            img="/images/1.7ck.webp"
                            smallName="chicken kurchan"
                            smallPrice={250}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={8}
                            img="/images/1.8tc.jpg"
                            smallName="tawa chicken (small)"
                            smallPrice={350}
                            mediumName="tawa chicken (large)"
                            mediumPrice={500}
                            types={2}
      />    
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Tawa
