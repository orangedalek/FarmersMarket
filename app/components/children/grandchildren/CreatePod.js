var React = require('react');
var helpers = require('../../utils/helpers');

var CreatePod = React.createClass({

	getInitialState: function() {
	    return {
	      title: '',
	      icon: '',
	      description: '',
	      keyword: ''
	    };
  	},

  	handleChange: function(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  	},

	handleClick: function(event) {
	    event.preventDefault();
	    this.props.savePod(this.state.title, this.state.icon, this.state.description, this.state.keyword);
	    this.setState({title:'', icon: '', description: '', keyword: ''});
  	},

	render: function() {
		return (
			
				<div className="panel panel-default">

					<div className="panel-heading">
						<h2 className="panel-title text-center">Create New Pod</h2>
					</div>

					<div className="panel-body text-center">
						<form>
							<div className="form-group">
								<h4 className=""><strong>My New Pod Name</strong></h4>
								<input type="text" className="form-control text-center" id="title" placeholder="Enter a new title." onChange= {this.handleChange} required/>
								<br />

            					<h4 className=""><strong>My Picture</strong></h4>
								<input type="text" className="form-control text-center" id="icon" placeholder="Enter a new icon." onChange= {this.handleChange} required/>
								<br />

            					<h4 className=""><strong>My Description</strong></h4>
								<input type="text" className="form-control text-center" id="description" placeholder="Enter a description." onChange= {this.handleChange} required/>
								<br />

           					 	<h4 className=""><strong>My Keyword</strong></h4>
								<input type="text" className="form-control text-center" id="keyword" placeholder="Enter a keyword." onChange= {this.handleChange} required/>
								<br />

								<button type="button" className="btn btn-primary" onClick={this.handleClick}>Add This Pod</button>
							</div>
						</form>
					</div>
			    </div>
		)
	}
});

module.exports = CreatePod;