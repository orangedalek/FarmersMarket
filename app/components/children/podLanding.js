var React = require('react');

//codebase imports
var helpers = require('../utils/helpers');

var podLanding = React.createClass({
	getInitialState: function() {
		return(
			{
			'title': this.title,
			'icon': this.icon,
			'description': this.description,
			'keyword': this.keyword,
			'members': this.members,
			'admin': this.admin
			}
		);
	},

	render: function() {
		<div className="container">
		
			<div class="row">
				<div class="col-md-8">
					<div class="panel panel-default">
						<div class="panel-body">
							<div class="row">
								<div class="col-md-8">
									<h1>{this.title}</h1>
								</div>
								<div class="col-md-4">
									<img id="pod-image" src="Koala_climbing_tree.jpg"></img>
								</div>
							</div>
							<div class="wrapper">
								<button id="joinBtn" class="btn btn-default btn-round-sm btn-sm">+Join</button>
							</div>
							<div class="wrapper">
								<h2>EPISODE</h2>
							</div>
							<div class="row">
								<div class="col-md-4">
									<img id="podcast-image" src="Koala_climbing_tree.jpg"></img>
								</div>
								<div class="col-md-8">
									<h4>Show:</h4>
									<h4>Episode:</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<form id="comment-form">
          	  <div class="form-group">
            	<label for="comment-name">Name</label>
            	<input type="text" class="form-control" id="comment-name" placeholder="Name"></input>
            	<p class="validate" id="name-validate">Please enter your name.</p>
          	  </div>
          	  <div class="form-group">
            	<label for="comment-textarea">Comment</label>
            	<textarea class="form-control" id="comment-textarea" rows="3" placeholder="Comment"></textarea>
            	<p class="validate" id="comment-validate">Please enter a comment.</p>
         	  </div>
          	  <button type="button" class="btn btn-default" id="comment-save">Save</button>
        	</form>
		</div>
	}
})

module.exports = podLanding;