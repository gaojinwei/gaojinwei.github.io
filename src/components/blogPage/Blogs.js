import React, { Component} from "react";
import axios from 'axios';

import {BlogLink} from "./BlogLink.js";
import Loading from "../common/Loading";

import "./Blogs.css";

class Blogs extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			posts: [],
			loading: true
		}
	}

	componentDidMount() {
	    axios.get("https://api.github.com/repos/gaojinwei/blog/issues")
	      .then(res => {
	        const posts = res.data;
	        debugger
	        this.setState({
	        	posts: posts,
	        	loading: false
	     	});
	      });
	}

	render(){
		const isLoading = this.state.loading;
		return (
	    	<div className="blogsWrapper">
	    		{
	    			isLoading ? (
	    				<Loading />
	    		 	) : (
	    		 	 	<ul className="blogUl">
	    		 	 		{
			    		 	 	this.state.posts.map(post =>
						            <BlogLink key={post.id} number={post.number}>{post.title}</BlogLink>
						        )
					        }
			    		</ul>
		    		)
	    		}
	    	</div>
		)
	}
}

export default Blogs;