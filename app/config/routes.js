var React = require('react');
//Uses ES6 for importing router library
var router = require("react-router-dom");

var Route = router.Route;

var BrowserRouter = router.BrowserRouter;

var Main = require('../components/Main');


module.exports = (
	// Router component
	<BrowserRouter>

		<Route component={Main} />

	</BrowserRouter>
);
