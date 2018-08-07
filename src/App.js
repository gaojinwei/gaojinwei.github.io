import React, { Component} from "react";
import { HashRouter as Router } from "react-router-dom";

import Head from "./components/structure/Head.js"
import MainContent from "./components/structure/MainContent.js"
import Foot from "./components/structure/Foot.js"

import "./App.css";

class App extends Component{
  render(){
    return(
    	<Router>
    		<React.Fragment>
	        	<Head />
	        	<MainContent />
	        	<Foot />
        	</React.Fragment>
        </Router>
    );
  }
}

export default App;