var React = require('react');
//Uses ES6 for importing router library
var router = require("react-router-dom");

var Route = router.Route;

var BrowserRouter = router.BrowserRouter;

var Main = require('../components/Main');
var dashboard = require('../components/children/dashboard');
var newUser = require('../components/children/newUser');
var podLanding = require('../components/children/podLanding');
//var results = require('../components/children/results');


module.exports = (
	// Router component
	<BrowserRouter>

		<Route component={Main} />

		<Route path='/dashboard' component={dashboard}/>

		<Route path='/login' component={Login}/>

		<Route path='/newuser' component={newUser}/>

		<Route path='/pod' component={podLanding}/>

		<Route path='/search' component={seachPodcast}/>

	</BrowserRouter>
);
