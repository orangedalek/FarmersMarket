var React = require('react');
var user = require('../../models/User');

<<<<<<< HEAD
var Dashboard = React.createClass({

	getInitialState: function() {
		return {
			title: "",
			results: [],
			displayResults: false
		};
	},

	// This function will respond to the user input 
	handleChange: function(event){

    	// this will capture any change to the query terms (pre-search).
    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);

	},

	// When a user submits... 
	handleClick: function(event){
		// prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    	// clicking the button
		event.preventDefault();
		// Set the parent to have the search term
		this.props.searchTerm(this.state.title);
		this.setState({title: ""});
		console.log(this.state.title);
		this.setState({displayResults: true});
	},

	render: function() {
		return (
			<div>
				<div className="col-md-12">
					<div className="panel panel-default">
						<div className="panel-heading">
							<h2 className="panel-title text-center">Your Pod Space</h2>
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
				    {this.state.results} 
=======
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
	    }
	    // .bind(this));

		// return {
		// 	title: "",
		// 	icon: "",
		// 	description: "",
		// 	members: "",
		// 	//pods: []
		// 	//displayResults: false
		// };

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
>>>>>>> 6f2391a7af7a4886e808ef3f3d8f3ea815cdc222
				</div>
			</div>
		  </div>
		)
	}
});

<<<<<<< HEAD
module.exports = Dashboard;
=======
module.exports = dashboard;
>>>>>>> 6f2391a7af7a4886e808ef3f3d8f3ea815cdc222
