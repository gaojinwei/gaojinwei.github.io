import React, { Component} from "react";

import "./Home.css";
import webwxgeticon from "./webwxgeticon.jpg"

function Home(){
	return (
    	<div>
    		<div className="flexDiv">
    			<img src={webwxgeticon} alt="" />
    		</div>
    		<div className="flexDiv">
    			<p>合工大第一吕布</p>
    		</div>
    	</div>
	)
}

export default Home;