import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Pricing from "./components/pages/Pricing";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";


function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/lndry_2.0/" exact component={Home} />
        <Route path="/lndry/about" component={About} />
        <Route path="/lndry/services" component={Services} />
        <Route path="/lndry/pricing" component={Pricing} />
        <Route path="/lndry/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
