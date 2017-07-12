//react
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';

//components
import App from 'App';
import Wrapper from './components/Wrapper';

ReactDOM.render((
	
		<Router history={browserHistory}>
			<Route path="/" pageId="wrapper" component={Wrapper}>
				<IndexRoute pageId="index" component={App}/>
			</Route>
		</Router>), document.getElementById('root'));
