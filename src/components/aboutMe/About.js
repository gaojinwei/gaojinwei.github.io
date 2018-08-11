import React, { Component} from "react";

import "./About.css";
import weixinQR from "./weixinQR.jpg"

function About(){
	return (
    	<div>
    		<div className="flexDiv">
    			<img src={weixinQR} alt="" />
    		</div>
    		<div className="flexDiv">
    			<p>微信</p>
    		</div>
    	</div>
	)
}

export default About;