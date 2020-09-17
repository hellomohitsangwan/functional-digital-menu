import React from 'react';
import './App.css';
import Home from "./Home"
import Header from "./Header";
import Checkout from "./Checkout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Tawa from './Tawa';
import MainCouseNonVeg from "./MainCourseNonVeg";
import STVeg from "./StVeg"
import STNveg from "./StNonVeg"
import Biryani from "./Biryani"
import MCVeg from "./MCVeg";
import Rrolls from "./Rrolla";
import STCveg from "./STCveg";
import MCCveg from "./MCCveg";
import STCNNveg from "./STCNveg";
import STCNveg from './STCNveg';
import MCCNveg from "./MCCNveg"
import Momos from "./Momos";
import Bread from "./Breads"
import Noodles from "./noodles";
import Rice from "./rice";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
           <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/tawa">
            <Header />
            <Tawa />
          </Route>
          <Route path="/MCNonVeg">
            <Header />
            <MainCouseNonVeg />
             </Route>   
          <Route path="/STVeg">
            <Header />
            <STVeg />
          </Route>
          <Route path="/STNonVeg">
            <Header />
            <STNveg />
          </Route>
                    <Route path="/biryani">
            <Header />
            <Biryani />
          </Route>
                    <Route path="/MCVeg">
            <Header />
            <MCVeg />
          </Route>

                    <Route path="/Rrolls">
            <Header />
            <Rrolls />
          </Route>
                    <Route path="/STCveg">
            <Header />
            <STCveg />
          </Route>
          <Route path="/MCCveg">
            <Header />
            <MCCveg />
          </Route>
                    <Route path="/STCNveg">
            <Header />
            <STCNveg />
          </Route>
                    <Route path="/MCCNveg">
            <Header />
            <MCCNveg />
          </Route>
                    <Route path="/noodles">
            <Header />
            <Noodles />
          </Route>
                    <Route path="/rice">
            <Header />
            <Rice />
          </Route>
                    <Route path="/breads">
            <Header />
            <Bread />
                      </Route>
                    <Route path="/momos">
            <Header />
            <Momos />
          </Route>
           <Route path="/">
            <Header />
            <Home />
          </Route>

       
          </Switch>
      </div>
      </Router>
  );
}

export default App;
