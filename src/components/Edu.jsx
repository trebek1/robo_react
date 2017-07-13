import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Edu extends Component {
  	render() {
    return (	
        <div className="content edu">
        	<div className="textContainer">
      			<h3>GENERAL ASSEMBLY</h3>
				<div id='edutext'>Web Development Immersive</div>
				<div id='edutext2'>March 2015 to June 2015</div>
				
				<h3>WASHINGTON UNIVERSITY IN ST. LOUIS</h3>
				<div id='edutext'>Master of Science in Finance</div>
				<div id='edutext2'>August 2012 to May 2013</div>
				
				<h3>BALDWIN WALLACE UNIVERSITY</h3>
				<div id='edutext'>B.S. Mathematics and Economics</div>
				<div id='edutext2'>August 2008 to May 2012</div>
	      		</div>
      	 </div>
    );
  }
}
