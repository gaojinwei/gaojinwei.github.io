import React, { Component} from "react";

import NavItem from "./NavItem.js"
import "./Nav.css";

class Nav extends React.Component {
	constructor(props) {
	    super(props);
	    /*this.state = {ToggleOnIndex: -1};*/

	    this.handleClick = this.handleClick.bind(this);
	}

	/*handleClick(index) {
	    this.setState(
		    {
		      ToggleOnIndex: index
		    }
	    );
  	}*/

  	handleClick(index) {
	    this.props.onNavClick(index);
  	}

	render() {
		const items = ["博客", "关于我"];
		const paths = ["/blogs", "/about"];
		const navItems = items.map((item, index) => {
				let isToggleOn = false;
				if(this.props.ToggleOnIndex ===  index){
					isToggleOn = true;
				}

				return (
					<NavItem key={index} path={paths[index]} isToggleOn={isToggleOn} onNavItemClick={() => this.handleClick(index)}>
					   {item}
					</NavItem>
				)
		  }
		);

		const nav = (
			<nav className="nav">
				{navItems}
			</nav>
		)

	    return nav;
	}
}

export default Nav;