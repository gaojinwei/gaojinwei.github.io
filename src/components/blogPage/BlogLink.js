import React, { Component} from "react";
import { Link } from "react-router-dom";

import "./BlogLink.css"

export const BlogLink = function(props){
	return (
		<li className="blgLi">
		  <Link className="blogA" to={`/blog/${props.number}`}>{props.children}</Link>
		</li>
	)
}