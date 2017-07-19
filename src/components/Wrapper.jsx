import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Wrapper extends Component {

  clickHandler(e){
  	var clicked = document.getElementsByClassName("clickStyle");
  	if(clicked.length > 0){
  		clicked[0].classList.remove("clickStyle");
  	}	

  }

  render() {
    return (
        <div className="app-wrapper">
      		<div>
      			{this.props.children}
      		</div>
      		<div id='buttons'>
      			<Link className="orangeText" to="/">
					<div id='lower_right'>
						<input className="anchor-image" type="image" src={require("../../static/sprites/hulks.png")}/>
						<h3 className='title'>Home </h3>
					</div>
				</Link>
				<Link className="orangeText" to="/about">
					<div id='upper_right'>
						<input className='anchor-image' type="image" src={require("../../static/sprites/tanks3.png")}/>
						<h3 className='title'>About Me </h3>
					</div>
				</Link>
				<Link onClick={this.clickHandler.bind(this)} className="orangeText" to="/projects">
					<div  id='lower_left'>
						<input className="anchor-image" type="image" src={require("../../static/sprites/robots.png")}/>
						<h3 className='title'> Projects </h3>
					</div>
				</Link>
				<Link className="orangeText" to="edu">
					<div id='upper_left'>
						<input className="anchor-image" type="image" src={require("../../static/sprites/brains3.png")}/>
						<h3 className='title'> Education </h3>
					</div>
				</Link>
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
