import React, { Component} from "react";
import axios from 'axios';
import marked from 'marked';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';

import {BlogLink} from "./BlogLink.js";
import Loading from "../common/Loading";

import "./BlogDetail.css";

hljs.registerLanguage('javascript', javascript);
marked.setOptions({
  highlight: code => hljs.highlightAuto(code).value,
});

class BlogDetail extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			article: null,
			loading: true
		}
	}

	componentDidMount() {
	    axios.get(`https://api.github.com/repos/gaojinwei/blog/issues/${this.props.match.params.id}`)
	      .then(res => {
	        const article = res.data;
	        debugger
	        this.setState({
	        	article: article,
	        	loading: false
	     	});
	      });
	}

	render(){
		const isLoading = this.state.loading;
		return (
	    	<div className="blogWrapper">
	    		{
	    			isLoading ? (
	    				<Loading />
	    		 	) : (
	    		 	 	<div className="article-detail" dangerouslySetInnerHTML={{ __html: marked(this.state.article.body) }}>
			    		</div>
		    		)
	    		}
	    	</div>
		)
	}
}

export default BlogDetail;