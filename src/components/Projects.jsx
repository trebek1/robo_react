import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Projects extends Component {

	selectDemo(type){
		 window.location = '/projects/' + type; 
	}

  	render() {
    return (	
        <div className="content projects">
        	<div className="textContainer">
				<div id='p-list'>
					<h3 className='section-title'> Projects ---> Click For More Information! </h3>
					<ul>
						<div><Link className="projects orangeText" to="/projects/tennis" id="tennis-project"> Tennis Courts in SF - July 2017 </Link></div>
						<div><Link className="projects" id="itunes-project"> Itunes Sampler - March 2016 </Link></div>
						<div><Link className="projects" id="maps-project"> Many Maps - Feb 2016</Link></div>
						<div><Link className="projects" id ="scene-project"> Scene in the City - May 2015  </Link></div>
					</ul>
					{this.props.children}	
				</div>
      	 	</div>
      	 </div>
    );
  }
}
