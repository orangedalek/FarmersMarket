var React = require('react');
var router = require('react-router-dom');
var Link = router.Link;
var Route = router.Route;

var axios = require("axios");

var helpers = require('../utils/helpers');
var CreatePod = require("./grandchildren/createPod");
var QueryPod = require("./grandchildren/queryPod");
var DisplayPod = require("./grandchildren/displayPod");

var Dashboard = React.createClass({

	getInitialState: function() {
		return { 
			title: "",
			icon: "",
			description: "",
			keyword: "",
			savedPods: [],
			results: [],
			episodeName: "",
			podcastURL: ""
		};
	},

	savePod: function(title, icon, description, keyword, podcastURL) {
        helpers.createPod(title, icon, description, keyword, podcastURL);
    },

    searchPod: function(episodeName) {
    	this.setState({
    		episodeName: episodeName
    	})
    },

    savePodcast: function(title, date, description, image, podcastURL) {
    	this.setState({
    		podcastURL: podcastURL
    	});
    	console.log("URL: " + podcastURL);
    	helpers.postPodcast(title, date, description, image, podcastURL);
    	this.getPodcast();
    },

     getPods: function() {
      axios.get('/api/pods')
      .then(function(response) {
        console.log(response.data);
        this.setState({
          savedPods: response.data
        });
      }.bind(this));
    },

    deletePods: function(article) {
  		axios.delete('/api/pods/' + article._id).then(function(response) {
  				this.setState({
  					savedPods: response.data
  				});
  				return response;
  				}.bind(this));

  		this.getPods();
  	},

  	componentDidMount: function() {
      axios.get('/api/pods')
      .then(function(response) {
        console.log(response.data);
        this.setState({
          savedPods: response.data
        });
      }.bind(this));
    },
	
	componentDidUpdate: function(prevProps, prevState){

		if(prevState.episodeName != this.state.episodeName) {
			
			helpers.searchEpisodes(this.state.episodeName)
				.then(function(data){
					console.log(data);
					if (data != this.state.results)
					{
						this.setState({
							results: data
						})
					}
				}.bind(this))
		}
	},
	
	getPodcast: function() {
  		axios.get('/api/podcast')
		.then(function(response) {
  			this.setState({
  				savedPodcasts: response.data
  			});
  		}.bind(this));
    },

    getPods: function() {
      axios.get('/api/pods')
       .then(function(response) {
        console.log(response.data);
        this.setState({
          savedPods: response.data
        });
     }.bind(this));
   },
	
	render: function() {
        return (
          <div className="container">
           <div className="spacer"></div>
            <div className="row">
                <div className="col-md-8">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h2 className="panel-title text-center loopy">Your Pods</h2>  
                            <div className="row">
                              <div id="button-holder">
                                <Link to="/Dashboard/DisplayPod"><button id="create-btn" className="btn btn-default btn-round-sm btn-sm">See All Pods</button></Link>
                               </div>
                                <Route path="/Dashboard/DisplayPod" render={(props) => (
                                <DisplayPod {...props} 
                                    getPods={this.getPods}
                                    savedPods={this.state.savedPods}
                                    deletePods={this.deletePods} />
                                )}
                                />   
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h2 className="panel-title text-center loopy">You</h2>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-2">
                                        <h2>Ken</h2>
                                    </div>
                                    <div className="col-md-2">
                                        <img id="user-pic" src="../assets/images/pea.jpg" alt="pea"></img>  
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <hr/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <h2>Pods</h2>
                                        <ul>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="row" id="create-btn-holder">
                                    <div className="col-md-3">
                                        <br/>
                                        <br/>
                                        <hr/>
                                        <Link to="/Dashboard/CreatePod"><button id="create-btn" className="btn btn-default btn-round-sm btn-sm">Create New Pod!</button></Link>
  
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
                    
            </div> 
                <div className="row">
                  <div className="col-md-8">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h2 className="panel-title text-center loopy">Search Results</h2>  
                            <div className="row">
                            
                            </div>
                        </div>
                    </div>
                  </div>
                </div> 

                <div className="row">
                    <Route path="/Dashboard/CreatePod" render={(props) => (
                        <CreatePod {...props} 
                            savePod={this.savePod}
                            searchPod={this.searchPod}
                            results={this.state.results}
                            savePodcast={this.savePodcast}
                            podcastURL ={this.state.podcastURL} />
                        )} 
                    />
                </div>

                <div className="row">
                    <Route path="/Dashboard/QueryPod" render={(props) => (
                        <QueryPod {...props}  
                           savePodcast={this.savePodcast}
                           searchPod={this.searchPod}
                           results={this.state.results} />
                        )} 
                    />
                </div>
          </div>
        );
    }
});

module.exports = Dashboard;
