import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Itunes extends Component {
  	render() {
    return (	
    	<div id='tennis-project-data'>
    		<div className="ib top height">
				<img className="image" src={require("../../../static/sites/itunes.png")} />
			</div>

			<div className='information'>
				<div> <span className='infoTitle'>URL: </span> 
					<a className='site' href="http://ember-songs.herokuapp.com/" target="_blank">http://ember-songs.herokuapp.com/</a>
				</div>
				<br/>
				<div> <span className='infoTitle'>Github: </span>
					<a className='site' href='https://github.com/trebek1/Ember_LP' target="_blank">https://github.com/trebek1/Ember_LP</a> 
				</div>
				<br/>
				<div> 
					<span className="infoTitle">Description: </span> <span>This is a small project that I built to learn some basics of ember. It allows the user to search for a band and query to itunes API for song data. You can also hear a sample of the song by clicking on the image provided. </span>
				</div>
				<br/>
				<div> 
					<span className="infoTitle">Technologies Used: </span> <span>JavaScript, Emberjs, Itunes API. </span>
				</div>
			</div>
		</div>
    );
  }
}







					