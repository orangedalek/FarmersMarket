var React = require('react');
var helpers = require('../../utils/helpers');
var dashboard = require("../../children/Dashboard");

var DisplayPod = React.createClass({

	getInitialState: function() {
		return {
			savedPods: []
		}
	},

	clickToDelete: function(result){
		this.props.deletePods(result);
	},

	componentDidMount: function() {
		this.props.getPods();
	},
	
	componentWillReceiveProps: function(nextProps) {

		var that = this;
		console.log(nextProps);
		var myResults = nextProps.savedPods.map(function(search, i){
			var boundClick = that.clickToDelete.bind(that, search);
			return <div className="list-group-item" key={i}>Icon: <img src={search.icon} /><br />Title: {search.title}<br />Desc: {search.description}
			<br />Keyword(s): {search.keyword}<br />Podcast URL: <a href={search.podcastURL} target='_blank'>{search.podcastURL}</a><br />
			<button type="button" className="btn btn-danger" style={{'float': 'right', 'marginTop': '-39px'}} 
			onClick={boundClick}>Delete</button></div>
		});

		this.setState({savedPods: myResults})
	},

	render: function() {
		return ( 
		<div>
			{this.state.savedPods}
		</div>
		);
	}

});


module.exports = DisplayPod;

