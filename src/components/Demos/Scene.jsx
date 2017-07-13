import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Scene extends Component {
  	render() {
    return (	
    	<div id='tennis-project-data'>
    		<div className="ib top height">
				<img className="image" src={require("../../../static/sites/scene-in-the-city.png")} />
			</div>

			<div className='information'>
				<div> <span className='infoTitle'>URL: </span> 
					<a className='site' href="http://scene-in-the-city-app.herokuapp.com/" target="_blank">http://scene-in-the-city-app.herokuapp.com/</a>
				</div>
				<br/>
				<div> <span className='infoTitle'>Github: </span>
					<a className='site' href='https://github.com/trebek1/Scene_in_the_City' target="_blank">https://github.com/trebek1/Scene_in_the_City</a> 
				</div>
				<br/>
				<div> 
					<span className="infoTitle">Description: </span> <span>Site that allows the user to search for a movie that was filmed in San Francisco and provides the user with the locations on a Google Map where different scenes were shot. I was responsible for the JavaScript portion in this group project.</span>
				</div>
				<br/>
				<div> 
					<span className="infoTitle">Technologies Used: </span> <span> JavaScript, JQuery, Ruby/Ruby on Rails, GIT,HTML5/CSS3, Google Maps API v3, Google Geocoder, AJAX, Heroku, RSpec,Postgres, Bootstrap </span>
				</div>
			</div>
		</div>
    );
  }
}







					