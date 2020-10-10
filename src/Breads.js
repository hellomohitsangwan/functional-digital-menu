import Menu from "./Menu";
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";

function Bread() {
    return (
        <div>
                            <div className="heading">
                    <h2 className="p-2 display-5 text-center">BREADS</h2>
                </div>
            <div className="container-fluid ">

                <div className="row  justify-content-center">

                    <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={100}
                            img="/images/131tr.jpg"
                            smallName="tawa k roti"
                            smallPrice={8}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={101}
                            img="/images/132tr.jpg"
                            smallName="tandoori roti"
                            smallPrice={12}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={103}
                            img="/images/133rr.jpg"
                            smallName="roomali roti"
                            smallPrice={12}
                        />    
                        
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={104}
                            img="/images/134r.jpg"
                            smallName="butter roti"
                            smallPrice={18}
                        />    
                        
                    </div>
                                                            <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={105}
                            img="/images/135gr.jpg"
                            smallName="garlic roti"
                            smallPrice={22}
                        />    
                        
                    </div>
                                                            <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={106}
                            img="/images/135mkn.png"
                            smallName="masala kulchha"
                            smallPrice={25}
                        />    
                        
                    </div>
                                                            <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={107}
                            img="/images/137naan.jpg"
                            smallName="naan"
                            smallPrice={25}
                        />    
                        
                    </div>
                                                            <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={108}
                            img="/images/138bn.jpg"
                            smallName="butter naan"
                            smallPrice={30}
                        />    
                        
                    </div>
                                                            <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={109}
                            img="/images/139sn.jpg"
                            smallName="stuff naan9"
                            smallPrice={40}
                        />    
                        
                    </div>
                                                            <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={110}
                            img="/images/1310pn.jpg"
                            smallName="paneer naan"
                            smallPrice={45}
                        />    
                        
                    </div>
                                                            <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={111}
                            img="/images/1311gn.jpg"
                            smallName="garlic naan"
                            smallPrice={40}
                        />    
                        
                    </div>
                                                            <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={112}
                            img="/images/1312mp.webp"
                            smallName="mirchi paratha"
                            smallPrice={35}
                        />    
                        
                    </div>

                                                                                <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={113}
                            img="/images/1313.jpg"
                            smallName="keema naan"
                            smallPrice={75}
                        />    
                        
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Bread
