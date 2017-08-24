var React = require('react');

var helpers = require('../utils/helpers');

var router = require('react-router-dom');
var Link = router.Link;
var Route = router.Route;

var Dashboard = React.createClass({
	getInitialState: function() {
		return { userPods: [] };
	},

	componentDidMount: function() {
		this.setState({userPods: []});
	  	// Grab all of the user's pods from the database & display
	  	helpers.getPods().then(function(userPods) {
	      this.setState({ userPods: userPods.data })
	      console.log("User's pods ", userPods.data)
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
		console.log('state', this.state);
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
	      )
	    });
	},

	// handleClick: function() {
	// 	event.preventDefault();
 //    this.props.searchTerm(this.state.title, this.state.icon, this.state.description, this.state.members);
 //    this.setState({title:'', icon: '', description: '', members: []}); //leave interest out for now
 //    this.setState({displayResults: true});

 //    db.Pod.save({title: this.state.title, icon: this.state.icon, description: this.state.description, members: this.state.members});
 //    // redirect to login page
 //    res.redirect('/create', function(req, res) {
 //      res.render('index'); // goes back to the index for createPod
 //    });

	// }

	render: function() {
		return (
		  <div className="container">

		    <div className="spacer"></div>

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
							<div className="container">

								<div className="row">
									<div className="col-md-2">
										<h2>Name</h2>
									</div>
									<div className="col-md-2">
										<img id="user-pic" src="Koala_climbing_tree.jpg"></img>	
									</div>
								</div>

								<div className="row">
									<div className="col-md-3">
										<hr/>
									</div>
								</div>

								<div className="row">
									<div className="col-md-4">
										<h2>Pods</h2>
										<ul>
											<li>podname</li>
											<li>podname</li>
										</ul>
									</div>
								</div>
								
								<div className="row" id="create-btn-holder">
									<div className="col-md-3">
										<br/>
										<br/>
										<hr/>
										<button id="create-btn" className="btn btn-default btn-round-sm btn-sm">Create New Pod!</button>
									</div>
								</div>	
							</div>
						</div>

					</div>
				</div>

			</div>

		  </div>
		);
	}
});

module.exports = Dashboard;
