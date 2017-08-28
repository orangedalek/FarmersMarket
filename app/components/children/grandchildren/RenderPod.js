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

	clickToSave1: function(result){
		
		this.props.savePodcast(result.stories[1].title, result.stories[1].published_at, result.stories[1].description, result.stories[1].source_image_url, result.stories[1].audio_url);
	
	},

	clickToSave2: function(result){
		
		this.props.savePodcast(result.stories[2].title, result.stories[2].published_at, result.stories[2].description, result.stories[2].source_image_url, result.stories[2].audio_url);
	
	},

	clickToSave3: function(result){
		
		this.props.savePodcast(result.stories[3].title, result.stories[3].published_at, result.stories[3].description, result.stories[3].source_image_url, result.stories[0].audio_url);
	
	},

	clickToSave4: function(result){
		
		this.props.savePodcast(result.stories[4].title, result.stories[4].published_at, result.stories[4].description, result.stories[4].source_image_url, result.stories[4].audio_url);
	
	},


	componentWillReceiveProps: function(nextProps){

		var that = this;
		var myResults = nextProps.results.map(function(search, i){

			var boundClick = that.clickToSave.bind(that, search);
			var boundClick1 = that.clickToSave1.bind(that, search);
			var boundClick2 = that.clickToSave2.bind(that, search);
			var boundClick3 = that.clickToSave3.bind(that, search);
			var boundClick4 = that.clickToSave4.bind(that, search);


	 		if (search.stories.length == 1) {
				return <div className="list-group-item" key={i}>
				<hr />Title: <a href={search.stories[0].audio_url} target="_blank">{search.stories[0].title}</a>
				<br />Published At: {search.stories[0].published_at}<br />Preview: {search.stories[0].description} <br /><img src={search.stories[0].image_url} height="100" width="100" /><br />
				<button id="clickButton" type="button" className="btn btn-success" 
				style={{'float': 'right', 'marginTop': '-39px'}} onClick={boundClick}>Save</button>
				</div>
			}
			else if (search.stories.length == 2) {
				return <div className="list-group-item" key={i}>
				<hr />Title: <a href={search.stories[0].audio_url} target="_blank">{search.stories[0].title}</a>
				<br />Published At: {search.stories[0].published_at}<br />Preview: {search.stories[0].description} <br /><img src={search.stories[0].image_url} height="100" width="100" /><br />
				<button id="clickButton" type="button" className="btn btn-success" 
				style={{'float': 'right', 'marginTop': '-39px'}} onClick={boundClick}>Save</button>
				<hr />
				Title: <a href={search.stories[1].audio_url} target="_blank">{search.stories[1].title}</a>
				<br />Published At: {search.stories[1].published_at}<br />Preview: {search.stories[1].description} <br /><img src={search.stories[1].image_url} height="100" width="100" /><br />
				<button id="clickButton" type="button" className="btn btn-success" 
				style={{'float': 'right', 'marginTop': '-39px'}} onClick={boundClick1}>Save</button>
				</div>
			}
			else if (search.stories.length == 3) {
				return <div className="list-group-item" key={i}>
				<hr />Title: <a href={search.stories[0].audio_url} target="_blank">{search.stories[0].title}</a>
				<br />Published At: {search.stories[0].published_at}<br />Preview: {search.stories[0].description} <br /><img src={search.stories[0].image_url} height="100" width="100" /><br />
				<button id="clickButton" type="button" className="btn btn-success" 
				style={{'float': 'right', 'marginTop': '-39px'}} onClick={boundClick}>Save</button>
				<hr />
				Title: <a href={search.stories[1].audio_url} target="_blank">{search.stories[1].title}</a>
				<br />Published At: {search.stories[1].published_at}<br />Preview: {search.stories[1].description} <br /><img src={search.stories[1].image_url} height="100" width="100" /><br />
				<button id="clickButton" type="button" className="btn btn-success" 
				style={{'float': 'right', 'marginTop': '-39px'}} onClick={boundClick1}>Save</button>
				<hr />
				Title: <a href={search.stories[2].audio_url} target="_blank">{search.stories[2].title}</a>
				<br />Published At: {search.stories[2].published_at}<br />Preview: {search.stories[2].description} <br /><img src={search.stories[2].image_url} height="100" width="100" /><br />
				<button id="clickButton" type="button" className="btn btn-success" 
				style={{'float': 'right', 'marginTop': '-39px'}} onClick={boundClick2}>Save</button>
				</div>
			}
			else if (search.stories.length == 4) {
				return <div className="list-group-item" key={i}>
				<hr />Title: <a href={search.stories[0].audio_url} target="_blank">{search.stories[0].title}</a>
				<br />Published At: {search.stories[0].published_at}<br />Preview: {search.stories[0].description} <br /><img src={search.stories[0].image_url} height="100" width="100" /><br />
				<button id="clickButton" type="button" className="btn btn-success" 
				style={{'float': 'right', 'marginTop': '-39px'}} onClick={boundClick}>Save</button>
				<hr />
				Title: <a href={search.stories[1].audio_url} target="_blank">{search.stories[1].title}</a>
				<br />Published At: {search.stories[1].published_at}<br />Preview: {search.stories[1].description} <br /><img src={search.stories[1].image_url} height="100" width="100" /><br />
				<button id="clickButton" type="button" className="btn btn-success" 
				style={{'float': 'right', 'marginTop': '-39px'}} onClick={boundClick1}>Save</button>
				<hr />
				Title: <a href={search.stories[2].audio_url} target="_blank">{search.stories[2].title}</a>
				<br />Published At: {search.stories[2].published_at}<br />Preview: {search.stories[2].description} <br /><img src={search.stories[2].image_url} height="100" width="100" /><br />
				<button id="clickButton" type="button" className="btn btn-success" 
				style={{'float': 'right', 'marginTop': '-39px'}} onClick={boundClick2}>Save</button>
				<hr />
				Title: <a href={search.stories[3].audio_url} target="_blank">{search.stories[3].title}</a>
				<br />Published At: {search.stories[3].published_at}<br />Preview: {search.stories[3].description} <br /><img src={search.stories[3].image_url} height="100" width="100" /><br />
				<button id="clickButton" type="button" className="btn btn-success" 
				style={{'float': 'right', 'marginTop': '-39px'}} onClick={boundClick3}>Save</button>
				</div>
			}
			else if (search.stories.length == 5) {
				return <div className="list-group-item" key={i}>
				<hr />Title: <a href={search.stories[0].audio_url} target="_blank">{search.stories[0].title}</a>
				<br />Published At: {search.stories[0].published_at}<br />Preview: {search.stories[0].description} <br /><img src={search.stories[0].image_url} height="100" width="100" /><br />
				<button id="clickButton" type="button" className="btn btn-success" 
				style={{'float': 'right', 'marginTop': '-39px'}} onClick={boundClick}>Save</button>
				<hr />
				Title: <a href={search.stories[1].audio_url} target="_blank">{search.stories[1].title}</a>
				<br />Published At: {search.stories[1].published_at}<br />Preview: {search.stories[1].description} <br /><img src={search.stories[1].image_url} height="100" width="100" /><br />
				<button id="clickButton" type="button" className="btn btn-success" 
				style={{'float': 'right', 'marginTop': '-39px'}} onClick={boundClick1}>Save</button>
				<hr />
				Title: <a href={search.stories[2].audio_url} target="_blank">{search.stories[2].title}</a>
				<br />Published At: {search.stories[2].published_at}<br />Preview: {search.stories[2].description} <br /><img src={search.stories[2].image_url} height="100" width="100" /><br />
				<button id="clickButton" type="button" className="btn btn-success" 
				style={{'float': 'right', 'marginTop': '-39px'}} onClick={boundClick2}>Save</button>
				<hr />
				Title: <a href={search.stories[3].audio_url} target="_blank">{search.stories[3].title}</a>
				<br />Published At: {search.stories[3].published_at}<br />Preview: {search.stories[3].description} <br /><img src={search.stories[3].image_url} height="100" width="100" /><br />
				<button id="clickButton" type="button" className="btn btn-success" 
				style={{'float': 'right', 'marginTop': '-39px'}} onClick={boundClick3}>Save</button>
				<hr />
				Title: <a href={search.stories[4].audio_url} target="_blank">{search.stories[4].title}</a>
				<br />Published At: {search.stories[4].published_at}<br />Preview: {search.stories[4].description} <br /><img src={search.stories[4].image_url} height="100" width="100" /><br />
				<button id="clickButton" type="button" className="btn btn-success" 
				style={{'float': 'right', 'marginTop': '-39px'}} onClick={boundClick4}>Save</button>
				</div>
			}
			else return <div className="list-group-item" key={i}>No Results Found. Please search again. </div>

		});

		this.setState({results: myResults});
	},

	// Here we render the function
	render: function(){
        return(
            <div className="panel panel-default">
                <div className="panel-body">
                    <h3 className="panel-title text-center"><strong>Query Results</strong></h3>
                    {this.state.results}
                </div>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = RenderPod;
