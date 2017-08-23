var React = require('react');

var dashboard = React.createClass({
	getInitialState: function() {
		return { userPods: [] };
	},

	componentDidMount: function() {
		this.setState({userPods: []});
	  	// Grab all of the user's pods from the database & display
	  	helpers.getPods().then(function(userPods) {
	      this.setState({ userPods: userPods.data });
	      console.log("User's pods ", userPods.data);
	    }.bind(this));
	},

	renderEmpty: function() {
	    return (
	      <li className="list-group-item">
	        <h3>
	          <span>
	            <em>You haven't joined any Pods yet!</em>
	          </span>
	        </h3>
	      </li>
	    );
	},

	renderPods: function() {
	    return this.state.userPods.map(function(pod, index) {

	      return (
	        <div key={index}>
	          <li className="list-group-item">
	            <h3>
	              <span>
	                <em>{pod.title}</em>
	              </span>
	              <span className="btn-group pull-right">
	                <a href={'/pod/:id'} rel="noopener noreferrer" target="_blank">
	                  <button className="btn btn-default ">Go to Pod</button>
	                </a>
	              </span>
	            </h3>
	            <p>Description: {pod.description}</p>
	          </li>
	        </div>
	      );
	    }.bind(this));
	},

	render: function() {
		<div className="container">
		<nav className="navbar navbar-default">
			<div className="navbar-header">
				<a className="navbar-brand" href="#">PodSquad</a>
			</div>
			<div className="nav navbar-right">
				<a id="dashLink" href="/user/:id">dashboard</a>
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
						{this.renderPods()}
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
						<img src="#"></img>
						<hr></hr>
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
	}
});

module.exports = dashboard;