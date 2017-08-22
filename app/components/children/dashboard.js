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
			
	<div className="container">
		<nav className="navbar navbar-default">
			<div className="navbar-header">
				<a className="navbar-brand" href="#">PodSquad</a>
			</div>
			<div className="nav navbar-right">
				<a id="dashLink" href="#">dashboard</a>
				<form className="navbar-form" role="search">
  				<div className="form-group">
    			<input type="text" className="form-control text-center" id="title" placeholder="search" onChange= {this.handleChange} required/>
  				</div>
  				<button type="submit" className="btn btn-default" onClick={this.handleClick}>Search</button>
				</form>
			</div>
		</nav>
		<div className="row">
			<div className="col-md-8">
				<div className="panel panel-default">
					<div className="panel-heading">
						<h2 className="panel-title text-center">Your Pods</h2>
					</div>
					<div className="panel-body">
						<h1>PODS GO HERE</h1>
					</div>
				</div>
			</div>
			<div className="col-md-4">
				<div className="panel panel-default">
					<div className="panel-heading">
						<h2 className="panel-title text-center">You</h2>
					</div>
					<div className="panel-body">
						<h2>Name</h2>
						<img src="#">
						<hr>
						<h2>Pods</h2>
						<ul>
							<li>podname</li>
							<li>podname</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
		)
	}
});

module.exports = dashboard;