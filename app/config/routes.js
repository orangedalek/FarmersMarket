// Inclue the React library
var React = require("react");
// Include the react-router module
var router = require("react-router-dom");
// Include the Route component for displaying individual routes
var Route = router.Route;
var BrowserRouter = router.BrowserRouter;
// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

var Main = require('../components/Main');

var Dashboard = require('../components/children/Dashboard');
var CreatePod = require('../components/children/grandchildren/CreatePod');

module.exports = (
	<BrowserRouter>
		<Route path="/" component={Main}>
		  <Route path="Dashboard" component={Dashboard}>
		    <Route path="/Dashboard/CreatePod" component={CreatePod} />
		  </Route>
		</Route>
	</BrowserRouter>
);

