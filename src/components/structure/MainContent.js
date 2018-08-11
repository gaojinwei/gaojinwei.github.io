import React, { Component} from "react";
import { Route } from "react-router-dom";

import "./MainContent.css";

import Home from "../home/Home.js";
import About from "../aboutMe/About.js";
import Blogs from "../blogPage/Blogs.js";
import BlogDetail from "../blogPage/BlogDetail.js";

import ocean from "../../../music/ocean.mp3"
import yuan from "./yuan.png"

class MainContent extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	isPause: true
	    }
	    this.audioRef = React.createRef();
	    this.imgRef = React.createRef();
	    this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		/*this.setState((prevState, props) => ({
		  isPause: !(prevState.isPause)
		}));*/
		const node = this.audioRef.current;
		const imgNode = this.imgRef.current;
		if (node.paused) {
			node.play();
			imgNode.style.setProperty('animation-play-state', 'running');
		} else {
			node.pause();
			imgNode.style.setProperty('animation-play-state', 'paused');
		}
	}

	render(){
		return (
			<main className="main">
				<span className="musicSpan">音乐</span>
				<img ref={this.imgRef} className="music" onClick={this.handleClick} src={yuan} />
				<audio loop ref={this.audioRef}>
				  <source src={ocean} type="audio/mp3" />
				</audio>
		    	<Route exact path="/" component={Home} />
		        <Route path="/about" component={About} />
		        <Route path="/blogs" component={Blogs} />
		        <Route path="/blog/:id" component={BlogDetail} />
		    </main>
		)
	}
}

export default MainContent;