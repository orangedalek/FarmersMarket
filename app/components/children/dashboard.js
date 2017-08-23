var React = require('react');

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
				</div>
			</div>
		)
	}
});

module.exports = Dashboard;