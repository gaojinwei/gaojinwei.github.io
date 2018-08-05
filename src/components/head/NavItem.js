import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./NavItem.css";

class NavItem extends React.Component {
	constructor(props) {
	    super(props);
	    this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		/*e.preventDefault();*/
		this.props.onNavItemClick();
	}
	render() {
		let spanElement;
		if(this.props.isToggleOn){
			spanElement = <span className="navInActive"></span>
		}
	    return (
		      /*{<a className="navItem" onClick={this.handleClick} href="">
		      	{this.props.children}
		      	{spanElement}
		      </a>}*/
		      <Link to={this.props.path} className="navItem" onClick={this.handleClick}>
		      	{this.props.children}
		      	{spanElement}
		      </Link>
	    );
	}
}

export default NavItem;