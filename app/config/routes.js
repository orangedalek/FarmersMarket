// Include the React library
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

var Dashboard = require('../components/children/dashboard');
var CreatePod = require('../components/children/grandchildren/createPod');
var NewUser = require('../components/children/newUser');
var Login  = require('../components/children/login');
var PodLanding = require('../components/children/podLanding');
var QueryPod = require('../components/children/grandchildren/queryPod');

var Routes = (

	<BrowserRouter>
		<Route component={Main}>

			<Route path="Dashboard" component={Dashboard}>
				<Route path="CreatePod" component={CreatePod} />
				<Route path="QueryPod" component={QueryPod} />
			</Route>
			<Route path="NewUser" component={NewUser} />
			<Route path="PodLanding" component={PodLanding} />

		</Route>
	</BrowserRouter>
);

module.exports = Routes;