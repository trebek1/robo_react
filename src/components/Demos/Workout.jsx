import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Workout extends Component {
  	render() {
    return (	
    	<div id='tennis-project-data'>
    		<div className="ib top height">
				<img className="image" src={require("../../../static/sites/workout.png")} />
			</div>

			<div className='information'>
				<div> <span className='infoTitle'>URL: </span> 
					<a className='site' href="http://logtheworkout.com" target="_blank">http://logtheworkout.com</a>
				</div>
				<br/>
				<div> <span className='infoTitle'>Github: </span>
					<a className='site' href='https://github.com/trebek1/lets_workout' target="_blank">https://github.com/trebek1/lets_workout</a> 
				</div>
				<br/>
				<div> 
					<span className="infoTitle">Description: </span> <span>App the allows a user to create a username and profile to record workout and other health related metrics.</span>
				</div>
				<br/>
				<div> 
					<span className="infoTitle">Technologies Used: </span> <span>React, Webpack, Express, Node, MongoDb, CSS, JavaScript </span>
				</div>
			</div>
		</div>
    );
  }
}







					