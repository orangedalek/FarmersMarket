var React = require('react');
var user = require('../../models/User');

var dashboard = React.createClass({

	getInitialState: function() {
		return {
			// username: "",
			// password: "",
			// interests: "",
			image: "",
			pods: []
			//displayResults: false
		};
	},

	handleClick: function() {

	}

	render: function() {
		return (

			<nav className="navbar navbar-default">
				<div className="container wrapper">
					<div className="navbar-header">
						<a className="navbar-brand" id="logo" href="index.html">PodSquad</a>
					</div>
					<ul className="nav navbar-nav navbar-right" id="nav-link">
						<li><a href="dashboard.js">Dashboard</a></li>
						<li><a href="create.js">Create</a></li>
					</ul>
				</div>
			</nav>

			<div>
				<div className="row">
					<div className="col-md-8">

						<div className="panel panel-default">

							<div className="panel-heading">
								<h2 className="panel-title text-center">My PodList</h2>
							</div>

							<div className="panel-body text-center">
								<form>
									<div className="form-group">
										<h4 className=""><strong>Search Term</strong></h4>
										<input type="text" className="form-control text-center" id="title" placeholder="What topic would you like to search?" onChange= {this.handleChange} required/>
										<br />
										<button type="button" className="btn btn-primary" onClick={this.handleClick}>Search</button>
									</div>
								</form>
							</div>

					   </div>

					</div>



					<div className="col-md-4">

						<div className="row">
							<div className="panel panel-default">
								<div className="panel-heading">
									<h2 className="panel-title text-center">My Profile</h2>
								</div>
								<div className="panel-body text-center">
									{this.state.image /*this.state.interest*/}
								</div>
							</div>
						</div>

						<div className="row">
							<div className="panel panel-default">
								<div className="panel-heading">
									<h2 className="panel-title text-center"><strong>New Pod Request</strong></h2>
								</div>
								<form>
									<div className="form-group">
										{/* <h4 className="">Create Pod</h4> */}
										{/* <input type="text" className="form-control text-center" id="title" placeholder="What topic would you like to search?" onChange= {this.handleChange} required/>
										<br /> */}
										<button type="button" className="btn btn-primary" onClick={this.handleClick}>Create Pod Now</button>
									</div>
								</form>
							</div>
						</div>

					</div>

				</div>
			</div>
		)
	}
});

module.exports = dashboard;
