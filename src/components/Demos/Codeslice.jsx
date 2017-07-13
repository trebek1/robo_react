import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Codeslice extends Component {
  	render() {
    return (	
    	<div id='tennis-project-data'>
    		<div className="ib top height">
				<img className="image" src={require("../../../static/sites/codeslice.png")} />
			</div>

			<div className='information'>
				<div> <span className='infoTitle'>URL: </span> 
					<a className='site' href="http://codeslice.guru" target="_blank">http://codeslice.guru</a>
				</div>
				<br/>
				<div> <span className='infoTitle'>Github: </span>
					<a className='site' href='https://github.com/trebek1/codeslice' target="_blank">https://github.com/trebek1/codeslice</a> 
				</div>
				<br/>
				<div> 
					<span className="infoTitle">Description: </span> <span>Site where I keep coding notes and a small blog. </span>
				</div>
				<br/>
				<div> 
					<span className="infoTitle">Technologies Used: </span> <span>React, JavaScript, Node.js, Express.js, GIT, HTML5/CSS3, Webpack </span>
				</div>
			</div>
		</div>
    );
  }
}







					