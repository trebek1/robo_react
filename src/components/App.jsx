import React, { Component } from 'react';
import {Link} from 'react-router';

export default class App extends Component {
  	render() {
    return (	
        <div>
      		<div id='buttons'>
				<div id='lower_right'>
					<input className="anchor-image" type="image" src={require("../../static/sprites/hulks.png")}/>
					<h3 className='title'>Home </h3>
				</div>
				<div id='upper_right'>
					<input className='anchor-image' type="image" src={require("../../static/sprites/tanks3.png")}/>
					<h3 className='title'>About Me </h3>
				</div>
				<div  id='lower_left'>
					<input className="anchor-image" type="image" src={require("../../static/sprites/robots.png")}/>
					<h3 className='title'> Projects </h3>
				</div>
				<div id='upper_left'>
					<input className="anchor-image" type="image" src={require("../../static/sprites/brains3.png")}/>
					<h3 className='title'> Education </h3>
				</div>
			</div>
      	 </div>
    );
  }
}
