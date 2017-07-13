import React, { Component } from 'react';
import {Link} from 'react-router';

export default class About extends Component {
  	render() {
    return (	
        <div className="content about">
        	<div className="textContainer">
	      		<div id='about'>
					<h3 className='lightBlue'> Basic Information </h3>				
					<ul>
						<li> Name: Alex Trzeciak </li>
						<li> Job: Software Engineer</li>
						<li> Location: San Francisco </li>
					</ul>
					<h3 className='lightBlue'> Primary Skills </h3>
					<ul>
						<li> JavaScript </li>
						<li> Node </li>
						<li> React/Redux</li>
						<li> HTML/CSS </li>
					</ul>
					<h3 className='lightBlue'> Interests </h3>
					<ul>
						<li> Tennis</li>
						<li> Cleveland Sports </li>
						<li> Running: 3-5 miles </li>
						<li> Finance </li>
						<li> Web Development </li>
						<li> Robotron, Halo Series, FPS </li>  
						<li> Borsht Soup, Gyros, Pomagranates, Sushi </li>
						<li> Tiki Bars/Rum</li>
					</ul>
					<h3 className='lightBlue'> Achievements </h3>
					<ul>
						<li> 5.0 tennis ranking </li>
						<li> Academic All-American (College) </li>
						<li> Wall Street Journal Award in Economics </li>
						<li> Passed the first two CFA Exams </li>
					</ul>
				</div>
      		</div>
      	 </div>
    );
  }
  componentDidMount(){
  	document.getElementById("bottom").style.display = "none"; 
  }
  componentWillUnmount() {
  	document.getElementById("bottom").style.display = "block"; 	
  }
}
