import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Maps extends Component {
  	render() {
    return (	
    	<div id='tennis-project-data'>
    		<div className="ib top height">
				<img className="image" src={require("../../../static/sites/maps.png")} />
			</div>

			<div className='information'>
				<div> <span className='infoTitle'>URL: </span> 
					<a className='site' href="https://manymaps.herokuapp.com" target="_blank">https://manymaps.herokuapp.com</a>
				</div>
				<br/>
				<div> <span className='infoTitle'>Github: </span>
					<a className='site' href='https://github.com/trebek1/maps' target="_blank">https://github.com/trebek1/maps</a> 
				</div>
				<br/>
				<div> 
					<span className="infoTitle">Description: </span> <span>Completed a small project to investigate which mapping application to use moving forward using 5 different mapping environments and deployed it to Heroku.  </span>
				</div>
				<br/>
				<div> 
					<span className="infoTitle">Technologies Used: </span> <span>JavaScript, various top mapping APIs, Express.js, Node.js </span>
				</div>
			</div>
		</div>
    );
  }
}







					