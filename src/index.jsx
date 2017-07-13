//react
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';

//components
import App from 'App';
import About from './components/About.jsx';
import Edu from './components/Edu.jsx';
import Projects from './components/Projects.jsx';
import Tennis from './components/Demos/Tennis.jsx';
import Itunes from './components/Demos/Itunes.jsx';
import Maps from './components/Demos/Maps.jsx';
import Scene from './components/Demos/Scene.jsx';
import Workout from './components/Demos/Workout.jsx';
import Codeslice from './components/Demos/Codeslice.jsx';
import Wrapper from './components/Wrapper.jsx';

ReactDOM.render((
	
	<Router history={browserHistory}>
		<Route path="/" pageId="wrapper" component={Wrapper}>
				<IndexRoute pageId="index" component={App}/>
				<Route path="/about" pageId="About" component={About}/>
				<Route path="/edu" pageId="Edu" component={Edu}/>
				<Route path="/projects" pageId="Projects" component={Projects}>
					<Route path="/projects/tennis" component={Tennis}/>
					<Route path="/projects/itunes" component={Itunes}/>
					<Route path="/projects/maps" component={Maps}/>
					<Route path="/projects/scene" component={Scene}/>
					<Route path="/projects/codeslice" component={Codeslice}/>
					<Route path="/projects/workout" component={Workout}/>
				</Route>
		</Route>
	</Router>), document.getElementById('root'));
