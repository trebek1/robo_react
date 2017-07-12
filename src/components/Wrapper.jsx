import React, { Component } from 'react';

export default class Wrapper extends Component {
  render() {
    return (
        <div className="app-wrapper">
	      		<div className="content">
	      			{this.props.children}
	      		</div>
      	</div>
    );
  }
}
