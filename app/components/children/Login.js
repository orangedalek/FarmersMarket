var React = require('react');

var Login = React.createClass({

	getInitialState: function() {
		return {
			username: "",
			password: ""
		};
	},

	handleChange: function(event) {
		this.setState({username: username, password: password});
  },

	// when clicked, save to Pod DB, then reroute to Podcast Search
	handleClick: function(event) {
		event.preventDefault();
    db.User.findAll({username: this.state.username, password: this.state.password});

    // if this username exists in User, redirect to dashboard

    // else { console.log("Invalid. Try again.")}
	},


	render: function() {
		return (
			<div className = "container">
				<div className="row">
					<div className="col-md-12">
						<div className="panel panel-default">

							<div className="panel-heading">
								<h2 className="panel-title text-center">Create New Pod</h2>
							</div>

							<div className="panel-body text-center">
								<form>
									<div className="form-group">
										<h4 className=""><strong>Your Username</strong></h4>
										<input type="text" className="form-control text-center" id="username" placeholder="Enter your username." onChange= {this.handleChange} required/>
										<br />
                    					<h4 className=""><strong>Your Password</strong></h4>
										<input type="text" className="form-control text-center" id="password" placeholder="Enter your password" onChange= {this.handleChange} required/>
										<br />
										<button type="button" className="btn btn-primary" onClick={this.handleClick}>Login</button>
                    					<button type="button" className="btn btn-primary" onClick={this.handleClick}>Sign Up</button>
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

module.exports = Login;