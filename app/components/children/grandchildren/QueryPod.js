var React = require('react');
var Link = require("react-router").Link;
var helpers = require("../../utils/helpers");

var QueryPod = React.createClass({
  
  getInitialState: function() {
    return {
      searchTerm: "",
      results: ""
    };
  },

  handleChange: function(event) {
		this.setState({searchTerm: searchTerm});
  },

  handleClick: function(event) {
		event.preventDefault();
    // squash searchTerm through this query f(x), return the results
	    console.log(searchTerm);
	    helpers.runQuery(searchTerm);
    //this.setState({results: response.data.results[0]});

	},

  /*
  renderPodcasts: function(){
		return(
	     <div className="container">
	        <Query updateSearch={this.state.searchTerm} />
	        <Results results={this.state.results} />
	     </div>
	  );
	},
*/

	render: function(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-md 12">
					  <div className="panel panel-default">
            <div className="panel-heading">
								<h2>Search External Pods</h2>
							</div>
							<div className="panel-body">
								<h4 className="query-pods"> Query Some Pods </h4>
                <input type="text" className="form-control text-center" id="searchTerm" placeholder="Search a Pod" onChange= {this.handleChange} required/>
                <br/>
								<button type="submit" className="btn btn-default" onClick={this.handleClick}>Search</button>
								<hr></hr>
								<ul className="list-group">
             
             				  	</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		 );
	}
});

module.exports = QueryPod;