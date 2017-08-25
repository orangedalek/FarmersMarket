var React = require('react');
var router = require('react-router-dom');
var Link = router.Link;
var Route = router.Route;

var helpers = require('../utils/helpers');
var CreatePod = require("./grandchildren/CreatePod");
var QueryPod = require("./grandchildren/QueryPod");

var Dashboard = React.createClass({

	getInitialState: function() {
		return { 
			title: "",
			icon: "",
			description: "",
			keyword: "",
			userPods: [] 
		};
	},

	savePod: function(title, icon, description, keyword) {
        console.log(title);
        console.log(icon);
        console.log(description);
        console.log(keyword);
        helpers.createPod(title, icon, description, keyword);
    },
	
	/*
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
 
 */
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
							{this.renderPods}
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
										<img id="user-pic" src="Koala_climbing_tree.jpg" alt="koala climbing tree"></img>	
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

										<Link to="/Dashboard/CreatePod"><button id="create-btn" className="btn btn-default btn-round-sm btn-sm">Create New Pod!</button></Link>

										<Link to="/Dashboard/QueryPod"><button id="create-btn" className="btn btn-default btn-round-sm btn-sm">Query Pod!</button></Link>
									</div>
								</div>	
							</div>
						</div>

					</div>
				</div>
					
			</div> 
				<div className="row">
					<Route path="/Dashboard/CreatePod" render={(props) => (
	               		<CreatePod {...props} 
	               			savePod={this.savePod} />
	            		)} 
					/>
				</div>

				<div className="row">
					<Route path="/Dashboard/QueryPod" render={(props) => (
	               		<QueryPod {...props}  />
	            		)} 
					/>
				</div>
		  </div>


		);
	}
});

module.exports = Dashboard;
