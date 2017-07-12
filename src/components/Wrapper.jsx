import React, { Component } from 'react';

export default class Wrapper extends Component {
  render() {
    return (
        <div className="app-wrapper">
      		<div>
      			{this.props.children}
      		</div>
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
			
			<div id='bottom'>
				<input id='hero' type="image" src={require("../../static/sprites/hero2.png")}/>
				<div id="links">
					<a href="https://www.linkedin.com/in/alextrz" target="_blank" className="space fa fa-linkedin fa-lg"></a>
					<a href="https://coderbyte.com/profile/trebek1" target="_blank" className="space fa fa-code fa-lg"></a>
					<a href="https://github.com/trebek1" target="_blank" className="space fa fa-github fa-lg"></a>
					<br/><br/>
					<a className="mailto" target="_top" href="mailto:atrzeciak@wustl.edu">Contact Me Here</a>  			
				</div>
			</div>
			
      	</div>
    );
  }
}
