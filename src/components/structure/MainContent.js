import React, { Component} from "react";
import { Route } from "react-router-dom";

import "./MainContent.css";

import Home from "../home/Home.js";
import Blogs from "../blogPage/Blogs.js";
import BlogDetail from "../blogPage/BlogDetail.js";

function MainContent(){
	return (
		<main className="main">
	    	<Route exact path="/" component={Home} />
	        {/*<Route path="/about" component={About} />*/}
	        <Route path="/blogs" component={Blogs} />
	        <Route path="/blog/:id" component={BlogDetail} />
	    </main>
	)
}

export default MainContent;