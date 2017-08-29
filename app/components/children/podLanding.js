var React = require('react');

//codebase imports
var helpers = require('../utils/helpers');

var PodLanding = React.createClass({
	getInitialState: function() {
		return(
			{
			  title : this.title,
			  icon: this.icon,
			  description: this.description,
			  keyword: this.keyword,
			  members: this.members,
			  admin: this.admin
			}
		)
	},

	render: function() {
        return(
        <div className="container">
        
            <div className="row">
                <div className="col-md-8">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-8">
                                    <h1>{this.title}</h1>
                                </div>
                                <div className="col-md-4">
                                    <img id="pod-image" src="../../public/assets/images/pod.jpg" />
                                </div>
                            </div>
                            <div className="wrapper">
                                <button id="joinBtn" className="btn btn-default btn-round-sm btn-sm">+Join</button>
                            </div>
                            <div className="wrapper">
                                <h2>EPISODE</h2>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <img id="podcast-image" src="" />
                                </div>
                                <div className="col-md-8">
                                    <h4>Show:</h4>
                                    <h4>Episode:</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-body">    
                    <form id="comment-form">
                      <div className="form-group">
                        <label htmlFor="comment-name">Name</label>
                        <input type="text" className="form-control" id="comment-name" placeholder="Name"></input>
                        <p className="validate" id="name-validate">Please enter your name.</p>
                      </div>
                      <div className="form-group">
                        <label htmlFor="comment-textarea">Comment</label>
                        <textarea className="form-control" id="comment-textarea" rows="3" placeholder="Comment"></textarea>
                        <p className="validate" id="comment-validate">Please enter a comment.</p>
                      </div>
                      <button type="button" className="btn btn-default" id="comment-save">Save</button>
                    </form>
                </div>
            </div>
        </div>
     )}
});

module.exports = PodLanding;