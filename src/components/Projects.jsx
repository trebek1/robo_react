import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Projects extends Component {
  	render() {
    return (	
        <div className="content projects">
        	<div className="textContainer">
				<div id='p-list'>
					<h3 className='section-title'> Projects ---> Click For More Information! </h3>
					<ul>
						<li className="projects" onclick='changeDemo(1)' id="tennis-project"> Tennis Courts in SF - July 2017 </li>
						<li className="projects" onclick='changeDemo(4)' id="itunes-project"> Itunes Sampler - March 2016 </li>
						<li className="projects" onclick='changeDemo(3)' id="maps-project"> Many Maps - Feb 2016</li>
						<li className="projects" onclick='changeDemo(2)' id ="scene-project"> Scene in the City - May 2015  </li>
					</ul>
				</div>
      	 	</div>
      	 </div>
    );
  }
}
