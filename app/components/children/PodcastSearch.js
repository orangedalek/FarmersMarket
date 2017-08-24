var React = require('react');
var Link = require("react-router").Link;
var helpers = require("../utils/helpers");

var QueryPod = React.createClass({

  // on this page, receive a searchTerm from user input
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
    var title = searchTerm;
    helpers.runQuery(title);
    // make this.state.results = res from helpers
    this.setState({results: response.data.results[0]});
	}

  renderPodcasts: function(){
		return(
	     <div className="container">
	        <Query updateSearch={this.state.searchTerm} />
	        <Results results={this.state.results} />
	     </div>
	  );
	},


	renderContainer: function(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-md 12">
					  <div className="panel panel-default">
              <div className="panel-heading">
								<h2>Search External Pods</h2>
							</div>
							<div className="panel-body">
								<h4 classnName="query-pods"> Query Pods </h4>
                <input type="text" className="form-control text-center" id="searchTerm" placeholder="Query a Pod" onChange= {this.handleChange} required/>
                <br/>
								<button type="submit" class="btn btn-default" onClick={this.handleClick}>Browse</button>
								<hr></hr>
								<ul className="list-group">
                  {this.renderPodcasts()}
               	</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		 )
	 };

	// render: function(){
	// 	return(
	// 		if (!this.state.???) {
  //     			return this.renderEmpty();
  //   		}
  //
  //   		return this.renderContainer();
	// 		)
	// }
  //
});

module.exports = QueryPod;
