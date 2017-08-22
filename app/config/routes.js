var React = require('react');
//Uses ES6 for importing router library
import { Route, IndexRoute, Router, browserHistory } from 'react-router-dom';

var Main = require('../components/Main');
var dashboard = require('../components/children/dashboard');
//var newUser = require('../components/children/newUser');
//var podLanding = require('../components/children/podLanding');
//var results = require('../components/children/results');


var routes = (
	// Router component
	<Router history = {browserHistory}>
		<Route path="/" component={Main}>

			{/* Show appropriate components for each route*/}
			<Route path="dashboard" component={dashboard} />

			<Route path="podLanding" component={podLanding} />

			<Route path="newUser" component={newUser} />

			<Route path="login" component={login} />

			<IndexRoute component={dashboard} />

		</Route>
	</Router>
);

