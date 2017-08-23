var React = require('react');

var dashboard = React.createClass({
		getInitialState: function() {
		return {
			title: "",
			startYear: "",
			endYear: "",
			displayResults: false
		};
		render: function(){
			<div class="container">
	<nav id="topNav" class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand page-scroll" href="#first"><i class="ion-ios-analytics-outline"></i>PodSquad</a>
            </div>
            <div class="navbar-collapse collapse" id="bs-navbar">
                <ul class="nav navbar-nav">
	        	    <li>
	                    <Link to="/about">About</Link>
	                </li>
	                <li>
	                   <Link to="/dashboard">Dashboard</Link>
	                </li>
	                <li>
	                    <Link to="/contact">Contact</Link>
	                </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <form class="navbar-form" role="search">
							<div class="form-group">
							<input type="text" class="form-control" placeholder="Search">
							<button type="submit" class="btn btn-default">Search</button>
							</div>
						</form>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
	<div class="spacer"></div>
	<div class="row">
		<div class="col-md 12">
			<div class="panel panel-default">
				<div class="panel-body">
					<div class="row">
						<div class="col-md-8">
							<h1>Pod Name</h1>
						</div>
						<div class="col-md-4">
							<img id="pod-image" src="Koala_climbing_tree.jpg">
						</div>
					</div>
					<div class="wrapper">
						<button id="joinBtn" class="btn btn-default btn-round-sm btn-sm">+Join</button>
					</div>
					<div class="wrapper">
						<h2>Current Episode</h2>
					</div>
					<div class="row">
						<div class="col-md-4">
							<img id="podcast-image" src="Koala_climbing_tree.jpg">
						</div>
						<div class="col-md-8">
							<h4>Show:</h4>
							<h4>Episode:</h4>
						</div>
					</div>
					<div class="container">
						
					</div>
				</div>
			</div>
		</div>
	</div>
</div>


		}
})