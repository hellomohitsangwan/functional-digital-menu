import Menu from "./Menu";
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";
import Tawa from "./Tawa";
import { Link } from "react-router-dom";
function Home() {
    return (
        <div className="container">
            <div className="buttonLink">
                <Link to="/tawa">
                    <button className="btn btn-danger btn-block p-2 my-4">TAWA</button>
                </Link>
                                 <Link to="/STVeg">
                    <button className="btn btn-danger btn-block p-2 my-4">STARTERS VEG</button>
                </Link>
                                 <Link to="/STNonVeg">
                    <button className="btn btn-danger btn-block p-2 my-4">STARTERS NON VEG</button>
                </Link>
                                 <Link to="/biryani">
                    <button className="btn btn-danger btn-block p-2 my-4">BIRYANI</button>
                </Link>
                                 <Link to="/MCVeg">
                    <button className="btn btn-danger btn-block p-2 my-4">MAIN COURSE VEG</button>
                </Link>
                                 <Link to="/MCNonVeg">
                    <button className="btn btn-danger btn-block p-2 my-4">MAIN COURSE NON VEG</button>
                </Link>
                                 <Link to="/Rrolls">
                    <button className="btn btn-danger btn-block p-2 my-4">ROOMALI ROLLS</button>
                </Link>
                 <Link to="/STCveg">
                    <button className="btn btn-danger btn-block p-2 my-4">STARTERS CHINES VEG</button>
                </Link>
                                 <Link to="/MCCveg">
                    <button className="btn btn-danger btn-block p-2 my-4">MAIN COURSE CHINES VEG</button>
                </Link>
                                 <Link to="/STCNveg">
                    <button className="btn btn-danger btn-block p-2 my-4">STARTERS CHINES NON VEG</button>
                </Link>
                                 <Link to="/MCCNveg">
                    <button className="btn btn-danger btn-block p-2 my-4">MAIN COURSE STARTERS CHINES NON VEG</button>
                </Link>
                                 <Link to="/noodles">
                    <button className="btn btn-danger btn-block p-2 my-4">NOODLES</button>
                </Link>
                                 <Link to="/rice">
                    <button className="btn btn-danger btn-block p-2 my-4">RICE</button>
                </Link>
                                 <Link to="/breads">
                    <button className="btn btn-danger btn-block p-2 my-4">INDIAN BREADS</button>
                </Link>
                                 <Link to="/momos">
                    <button className="btn btn-danger btn-block p-2 my-4">MOMOS</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
