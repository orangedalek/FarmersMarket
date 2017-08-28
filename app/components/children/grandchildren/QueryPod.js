var React = require('react');
var helpers = require("../../utils/helpers");
var RenderPod = require("./RenderPod");

var QueryPod = React.createClass({
  
  getInitialState: function() {
    return {
    	episodeName: '',
    	displayResults:false
    };
  },


  handleChange: function(event) {
  	var newState = {};
    newState[event.target.id] = event.target.value;
	this.setState(newState);
  },

  handleClick: function(event) {
	event.preventDefault();   	
	this.props.searchPod(this.state.episodeName);
	this.setState({episodeName: ''});
	this.setState({displayResults: true});
	   
  },

	render: function(){
        return(
            <div>
             <div className="col-md-12">
              <div className="panel panel-default">
                <div className="panel-body text-center">
                    <h2 className="loopy">Search External Pods</h2>
                 <form>
                    <div className="form-group">
                        <h4 className=""> Query Some Pods </h4>
                        <input type="text" className="form-control text-center" id="episodeName" placeholder="Enter an episode name." onChange= {this.handleChange} required/>
                        <br/>
                        <button type="button" className="btn btn-primary" onClick={this.handleClick}>Search</button>
                        <hr></hr>
                    </div>
                 </form>
                </div>
              </div>
              {this.state.displayResults ? <RenderPod results={this.props.results} savePodcast={this.props.savePodcast} /> : null }
             </div>
            </div>
         );
    }
});

module.exports = QueryPod;