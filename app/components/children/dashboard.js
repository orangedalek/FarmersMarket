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
			<div>
				<div className="col-md-12">
					<div className="panel panel-default">
						<div className="panel-heading">
							<h2 className="panel-title text-center">Your Space</h2>
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
			</div>
		)
	}
});

module.exports = dashboard;