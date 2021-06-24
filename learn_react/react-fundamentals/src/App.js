import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Footer from './components/site/Footer';
import Header from './components/site/Header';
import Sidebar from './components/site/Sidebar';
import FunctionalComponentDemo from './components/concepts/FunctionalComponents/FunctionalComponentDemo';
//importing router and renaming it as router bc we're lazy
import { BrowserRouter as Router } from 'react-router-dom';


//header is outside the router tag bc it wont be affected by route changes or the showing of diff compoenents
//we have to wrap everything that is affected by react-router-dom in Router tags 
function App() {
    return <div className="App">
        
    <Header />
           <Router>
        <Sidebar />
        </Router>
        <Footer />
    </div>;
}

export default App;