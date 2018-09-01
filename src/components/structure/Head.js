import React, { Component} from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router'

import Nav from "../head/Nav.js";
import "./Head.css";
import small from "./small.jpg";

class Head extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {ToggleOnIndex: -1};

	    this.handleClick = this.handleClick.bind(this);
	    this.handleHomeClick = this.handleHomeClick.bind(this);
	}

	componentDidMount() {
	  if (this.props.location.pathname.includes("blogs") ||
	  	  this.props.location.pathname.includes("blog")
	  	 ){
	    this.setState(
		    {
		      ToggleOnIndex: 0
		    }
	    );
	  } else if (this.props.location.pathname.includes("about")) {
	    this.setState(
		    {
		      ToggleOnIndex: 1
		    }
	    );
	  }
	}

	handleClick(index) {
	    this.setState(
		    {
		      ToggleOnIndex: index
		    }
	    );
  	}

  	handleHomeClick() {
	    this.setState(
		    {
		      ToggleOnIndex: -1
		    }
	    );
  	}

  	render(){
  		return (
	  		<header className="header">
		    	<div className="headerDiv">
		    		<Link to="/" className="avatar" onClick={this.handleHomeClick}>
		    			<img src={small} />
		    			<span className="avatarSpan">高进炜</span>
		    		</Link>
		    		<Nav ToggleOnIndex={this.state.ToggleOnIndex} 
		    			 onNavClick={this.handleClick}/>
		    	</div>
	    	</header>
    	)
  	}
}

export default withRouter(Head);