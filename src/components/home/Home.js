import React, { Component} from "react";

import "./Home.css";
import webwxgeticon from "./webwxgeticon.jpg"

function Home(){
	return (
    	<div>
    		<div className="flexDiv">
    			<img src={webwxgeticon} alt="" />
    		</div>
    		<div className="flexColumn">
    			<p className="flexDiv">翡翠湖畔撒过尿</p>
    			<p className="flexDiv">屯溪路旁睡过觉</p>
    			<p className="flexDiv">那湖那路今犹在</p>
    			<p className="flexDiv">不见当年少年勇</p>
    		</div>
    	</div>
	)
}

export default Home;