import Menu from "./Menu";
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";

function MainCourseNonVeg() {
    return (
        <div>
                                        <div className="heading">
                    <h2 className="p-2 display-5 text-center">MAIN COURSE NON-VEG</h2>
            </div>
             <div className="container-fluid ">

                <div className="row  justify-content-center">

                    <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={9}
                            img="https://b.zmtcdn.com/data/dish_photos/50d/cbab80a8cffc7bcc30936a7dbc4cf50d.jpg?fit=around%7C200%3A200&amp;crop=200%3A200%3B%2A%2C%2A"
                            smallName="butter chicken (small)"
                            smallPrice={150}
                            mediumName="butter chicken (medium)"
                            mediumPrice={250}
                            largeName="butter chicken (large)"
                            largePrice={350}
                            types={3}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={10}
                            img="https://b.zmtcdn.com/data/dish_photos/274/73442cf7529eb6283c98af4a83555274.jpg?fit=around%7C200%3A200&amp;crop=200%3A200%3B%2A%2C%2A"
                            smallName="chicken curry (small)"
                            smallPrice={150}
                            mediumName="chicken curry (medium)"
                            mediumPrice={250}
                            largeName="chicken curry (large)"
                            largePrice={350}
                            types={3}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={11}
                            img="https://upload.wikimedia.org/wikipedia/commons/3/3c/Chicken_makhani.jpg"
                            smallName="chicken masala (small)"
                            smallPrice={150}
                            mediumName="chicken masala (medium)"
                            mediumPrice={250}
                            largeName="chicken masala (large)"
                            largePrice={350}
                            types={3}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={12}
                            img="https://zaykarecipes.com/eng/wp-content/uploads/2020/06/Rara-Chicken-Recipe.jpg"
                            smallName="chicken rahara (small)"
                            smallPrice={160}
                            mediumName="chicken rahara(medium)"
                            mediumPrice={260}
                            largeName="chicken rahara(large)"
                            largePrice={360}
                            types={3}
                        />    
                        
                    </div>

                    <div className="respRow col-6 col-lg-4 p-3 justify-content-center">
                        <Menu 
                            id={13}
                            img="https://b.zmtcdn.com/data/dish_photos/949/0a82d7861b540b10d21a0ab11c290949.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
                            smallName="matki chicken (small)"
                            smallPrice={170}
                            mediumName="matki chicken (medium)"
                            mediumPrice={270}
                            largeName="matki chicken (large)"
                            largePrice={370}
                            types={3}

      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={14}
                            img="https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2018/Dhaba_Style_Egg_Curry_Recipe-3.jpg"
                            smallName="egg curry (extra egg 10)"
                            smallPrice={150}
      />    
                    </div>

                                                            <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={15}
                            img="https://foodiesterminal.com/wp-content/uploads/2019/12/boneless-chicken-gravy-recipe-in-instant-pot-3-679x1024.jpg"
                            smallName="boneless gravy"
                            smallPrice={90}
                        />    
                        
                    </div>

                    <div className="respRow col-6 col-lg-4 p-3 justify-content-center">
                        <Menu 
                            id={16}
                            img="/images/roganGhosh.jpg"
                            smallName="mutton poganjosh"
                            smallPrice={300}

      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={1000}
                            img="/images/1Muttontikkamasala.jpg"
                            smallName="mutton tikka masala"
                            smallPrice={300}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={237}
                            img="/images/2muttonRara.jpg"
                            smallName="mutton rahara"
                            smallPrice={320}
      />    
                    </div>

                                        <div className="col-6 col-lg-4 p-3">
                        <Menu 
                            id={18}
                            img="/images/3buhnaGhost.jpg"
                            smallName="bhuna ghost"
                            smallPrice={350}
                            />
                    </div>

                        

                </div>
            </div>

        </div>
    )
}

export default MainCourseNonVeg
