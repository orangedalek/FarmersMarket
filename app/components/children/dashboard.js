var React = require('react');
var helpers = require('./utils/helpers');

var dashboard = React.createClass({
	render: function() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h2 className="panel-title text-center">Your Space</h2>
				</div>
				<div className="panel-body text-center">
					{this.props.pods.map(function(pod, i) {
		            	return (
		              	<h3 key={i}>{pod.title} </h3>
		              	<img key={i} src='"'{pod.icon}'"'></img>
		              	<p key={i}>{pod.description}</p>
		            	);
		          	})}
				</div>
			</div>
		)
	}
});

module.exports = dashboard;