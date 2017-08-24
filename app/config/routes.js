var React = require('react');
//Uses ES6 for importing router library
var router = require("react-router-dom");

var Route = router.Route;

var BrowserRouter = router.BrowserRouter;

var Main = require('../components/Main');
var Dashboard = require('../components/children/Dashboard');
var CreatePod = require('../components/children/grandchildren/CreatePod');


module.exports = (
	// Router component
	<BrowserRouter>

		<Route path="/" component={Main}>
		  <Route path="Dashboard" component={Dashboard}>
		    <Route path="/Dashboard/CreatePod" component={CreatePod} />
		  </Route>
		</Route>

	</BrowserRouter>
);

