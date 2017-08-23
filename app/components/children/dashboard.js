var React = require('react');

var dashboard = React.createClass({

	getInitialState: function() {
		return {
			title: "",
			startYear: "",
			endYear: "",
			displayResults: false
		};
	},

	render: function() {
		return (

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
								<input type="text" class="form-control" placeholder="Search" />
								<button type="submit" class="btn btn-default" onClick={this.handleClick}>Search</button>
								</div>
							</form>
	                    </li>
	                </ul>
	            </div>
	        </div>
	    </nav>
	    <div class="spacer"></div>

		<div class="row">
			<div class="col-md-8">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h2 class="panel-title text-center">Your Pods</h2>
					</div>
					<div class="panel-body">
						<h1>PODS GO HERE</h1>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h2 class="panel-title text-center">You</h2>
					</div>
					<div class="panel-body">
						<div class="container">
							<div class="row">
								<div class="col-md-2">
									<h2>Name</h2>
								</div>
								<div class="col-md-2">
									<img id="user-pic" src="Koala_climbing_tree.jpg"></img>	
								</div>
							</div>
							<hr></hr>
							<div>
								<h2>Pods</h2>
								<ul>
									<li>podname</li>
									<li>podname</li>
								</ul>
							</div>
							<br></br>
							<br></br>
							<hr></hr>
							<div id="create-btn-holder" class="row">
								<div class="col-md-4">
									<button id="create-btn" class="btn btn-default btn-round-sm btn-sm">Create New Pod!</button>
								</div>
							</div>	
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
		)
	}
});

module.exports = dashboard;