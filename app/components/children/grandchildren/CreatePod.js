var React = require('react');
var helpers = require('../../utils/helpers');
var RenderPod = require("./RenderPod");

var CreatePod = React.createClass({

	getInitialState: function() {
	    return {
	      title: '',
	      icon: '',
	      description: '',
	      keyword: '',
	      episodeName: '',
	      displayResults: false,
	      podcastURL: ''
	    };
  	},

  	handleChange: function(event) {
	    var newState = {};
	    newState[event.target.id] = event.target.value;
	    this.setState(newState);
  	},

	handleClick: function(event) {
	    event.preventDefault();
	    this.props.savePod(this.state.title, this.state.icon, this.state.description, this.state.keyword, this.props.podcastURL);
	    this.setState({title:'', icon: '', description: '', keyword: '', podcastURL: ''});
  	},

  	handleClick2: function(event) {
		event.preventDefault();   	
		this.props.searchPod(this.state.episodeName);
		this.setState({episodeName: ''});
		this.setState({displayResults: true});
	   
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
								<input type="text" className="form-control text-center" id="icon" placeholder="Enter an image link." onChange= {this.handleChange} required/>
								<br />

            					<h4 className=""><strong>My Description</strong></h4>
								<input type="text" className="form-control text-center" id="description" placeholder="Enter a description." onChange= {this.handleChange} required/>
								<br />

           					 	<h4 className=""><strong>My Keyword</strong></h4>
								<input type="text" className="form-control text-center" id="keyword" placeholder="Enter a keyword." onChange= {this.handleChange} required/>
								<br />

								<h4 className=""><strong>Podcast URL</strong></h4>
								<input type="text" value={this.props.podcastURL} className="form-control text-center" id="podcastURL" onChange= {this.handleChange} required/>
								<br />

								<div className="panel-body text-center">
								 	<div className="form-group">
										<h4 className=""> Query Some Pods </h4>
				        				<input type="text" className="form-control text-center" id="episodeName" placeholder="Enter an episode name." onChange= {this.handleChange} required/>
				        				<br/>
										<button type="button" className="btn btn-primary" onClick={this.handleClick2}>Search</button>
										<hr></hr>
									</div>
								</div>

								<div className="panel-body text-center">
									{this.state.displayResults ? <RenderPod results={this.props.results} savePodcast={this.props.savePodcast} /> : null }
								</div>

								<button type="button" className="btn btn-primary" onClick={this.handleClick}>Add This Pod</button>
							</div>
						</form>
					</div>
			    </div>
		)
	}
});

module.exports = CreatePod;