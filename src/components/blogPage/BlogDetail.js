import React, { Component} from "react";
import axios from 'axios';
import marked from 'marked';
/*import hljs from 'highlight.js';*/
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';

import {BlogLink} from "./BlogLink.js";
import Loading from "../common/Loading";

import "./BlogDetail.css";

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);
marked.setOptions({
  highlight: code => hljs.highlightAuto(code).value,
});

class BlogDetail extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			article: null,
			loading: true,
			showBigImg: false,
			bigImgSrc: ""
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		this.setState({
	        showBigImg: false
	    });
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

	    const blogDiv = document.getElementById("blogDetail");
	    /*blogDiv.onclick = function(event) {
		  let target = event.target; // where was the click?

		  if (target.tagName != 'IMG') return; // not on TD? Then we're not interested

		  alert(target.src); // highlight it
		};*/

		//之所以改为箭头函数，是因为要this.setState，关键在于这个this
		blogDiv.onclick = event => {
		  let target = event.target; // where was the click?

		  if (target.tagName != 'IMG') return; // not on TD? Then we're not interested

		  this.setState({
	          showBigImg: true,
			  bigImgSrc: target.src
	      });

		};

	}

	render(){
		const isLoading = this.state.loading;
		const showBigImg = this.state.showBigImg;
		const bigImgSrc = this.state.bigImgSrc;

		let bigImg;
		if (showBigImg) {
			bigImg =  (
				<div className="previewImg flexDiv" onClick={this.handleClick}>
	    			<img className="bigImg" src={bigImgSrc} />
	    		</div>
			)				
		}
		return (
	    	<div className="blogWrapper" id="blogDetail">
	    		{
	    			isLoading ? (
	    				<Loading />
	    		 	) : (
	    		 		<React.Fragment>
		    		 	 	<div className="article-detail" dangerouslySetInnerHTML={{ __html: marked(this.state.article.body) }}>
				    		</div>
				    		{bigImg}
				    	</React.Fragment>
		    		)
	    		}
	    	</div>
		)
	}
}

export default BlogDetail;