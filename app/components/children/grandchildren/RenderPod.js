var React = require('react');

var RenderPod = React.createClass({

	getInitialState: function() {
		return {
			title: "",
			date: "",
			url: "",
			image: "",
			desc: "",
			results: []
		}
	},

	//saving the pod to  your pods
	clickToSave: function(result){
		this.props.savePodcast(result.stories[0].title, result.stories[0].published_at, result.stories[0].description, result.stories[0].source_image_url, result.stories[0].audio_url);
	},

	componentWillReceiveProps: function(nextProps){

		var that = this;
		var myResults = nextProps.results.map(function(search, i){

			var boundClick = that.clickToSave.bind(that, search);

			return <div className="list-group-item" key={i}>
			Title: <a href={search.stories[0].audio_url} target="_blank">{search.stories[0].title}</a>
			<br />Published At: {search.stories[0].published_at}<br />Preview: {search.stories[0].description} <br /><img src={search.stories[0].image_url} height="100" width="100" /><br />
			<button id="clickButton" type="button" className="btn btn-success" 
			style={{'float': 'right', 'marginTop': '-39px'}} onClick={boundClick}>Save</button></div>
		});

		this.setState({results: myResults});
	},

	// Here we render the function
	render: function(){
		return(
			<div className="panel panel-success">
				<div className="panel-heading">
					<h3 className="panel-title text-center"><strong>Query Results</strong></h3>
				</div>
				<div className="panel-body">
					{this.state.results}
				</div>
			</div>
		);
	}
});

// Export the component back for use in other files
module.exports = RenderPod;
