import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Tennis extends Component {
  	render() {
    return (	
        
    	<div id='tennis-project-data'>
    		<div className="ib">
				<img className="image" src={require("../../../static/sites/tennis3.png")} />
			</div>

			<div className='information'>
				<div> <span className='infoTitle'>URL:</span> 
					<a className='site' href="http://tenniscourtsinsf.com" target="_blank">http://tenniscourtsinsf.com</a>
				</div>
				<br/>
				<div> <span className='infoTitle'>Github:</span>
					<a className='site' href='https://github.com/trebek1/tennis_3.0' target="_blank">https://github.com/trebek1/tennis_3.0</a> 
				</div>
				<br/>
				<div> 
					<span className="infoTitle">Description:</span> An app that allows the user to find tennis court locations in SF. Includes both a street view and relevant information for tennis courts, tennis shops and tennis clubs. 
				</div>
				<br/>
				<div> 
					<span className="infoTitle">Technologies Used: </span> React, Redux, JavaScript, Node.js, Express.js, GIT, HTML5/CSS3, Google Maps API v3, Google Street View, MongoDB. 
				</div>
			</div>
		</div>
    );
  }
}







					