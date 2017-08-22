// add dependencies
var React = require('react');
//var helpers = require('../utils/helpers');
var user = require('../../models/User');

var newUser = React.createClass({

  getInitialState: function() {
    return {
      username: '',
      password: '',
      //interests: [],
      image: '',
      pods: []
    };
  },

  handleChange: function(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  handleClick: function(event) {
    event.preventDefault();
    this.props.searchTerm(this.state.username, this.state.password, this.state.image, this.state.pods);
    this.setState({username:'', password: '', image: '', pods: []}); //leave interest out for now
    this.setState({displayResults: true});
  },

  // componentDidMount: function(){
  //   helpers.getSaved().then(function() {
  //     var data = returned.data
  //     this.setState({saved: data})
  //   });
  // }
  //
  // componentDidUpdate: function() {
  //
  // }

  //redirect to the Main.js "/" route

  render: function() {
    return (
      <div>
				<div className="col-md-12">
					<div className="panel panel-primary">
						<div className="panel-heading">
							<h2 className="panel-title text-center"><strong>Search</strong></h2>
						</div>
						<div className="panel-body text-center">
							<form>
								<div className="form-group">
									<h4 className=""><strong>Username</strong></h4>
									<input type="text" className="form-control text-center" id="username" placeholder="Enter your username." onChange= {this.handleChange} required/>
									<br />

									<h4 className=""><strong>Password</strong></h4>
									<input type="text" className="form-control text-center" id="password" placeholder="Enter your password." onChange= {this.handleChange} required/>
									<br />

                  <h4 className=""><strong>Password</strong></h4>
									<input type="text" className="form-control text-center" id="imageURL" placeholder="Enter your image link." onChange= {this.handleChange} required/>
									<br />

									{/* <h4 className=""><strong>End Year</strong></h4>
									<input type="text" className="form-control text-center" id="endYear" placeholder="2017"onChange= {this.handleChange} required/>
									<br /> */}

									<button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit My Info</button>
								</div>
							</form>
						</div>
					</div>
					{/*this.state.displayResults ? <Results results={this.props.results} saveArticle={this.props.[this.props.saveArticle]} /> : null */}
				</div>
			</div>

    );
  }
});

//exports the User
module.exports = newUser;
