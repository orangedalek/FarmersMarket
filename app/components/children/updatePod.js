var React = require('react');

var UpdatePod = React.createClass({

	getInitialState: function() {
		return {
			title: "",
			icon: "",
			description: "",
      		keyword: ""
			//members: [],
      		//admin: "" will be the ID of the current user
			//pods: []
			//admin: false
		};
	},

  	// will update the inputs from below into new initial state values empty
	handleChange: function(event) {
		// ask how to incorporate members = [] to this.states
		this.setState({title: title, icon: icon, description: description, keyword: keyword});
		// makes this user have pod.admin = true, allowing access to "update" page for pod created
    //this.setState({admin: true});
  	},

	// when clicked, save to Pod DB, then reroute to Podcast Search
	handleClick: function(event) {
		event.preventDefault();
	    db.Pod.update({title: this.state.title, icon: this.state.icon, description: this.state.description, keyword: this.state.keyword /*members: this.state.members*/});
	    // specify /query/:id to PodcastSearch.js
	    res.redirect('/dashboard/:id', function(req, res) {
	      res.render('index'); // goes back to the index for createPod
	    });
	},

	render: function() {
		render: function() {
        return (
            <div className = "container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-body text-center">
                                <h2 className="panel-title text-center loopy">Create New Pod</h2>
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
                                        <h4 className=""><strong>My Description</strong></h4>
                                        <input type="text" className="form-control text-center" id="keyword" placeholder="Enter a keyword." onChange= {this.handleChange} required/>
                                        <br />
                                        <button type="button" className="btn btn-primary" onClick={this.handleClick}>Add This Pod</button>
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

module.exports = UpdatePod;