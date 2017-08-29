var axios = require('axios');

//Standard imports
var React = require('react');
var router = require('react-router-dom');
var Link = router.Link;
var Route = router.Route;

//call in the helper func
var helpers = require('./utils/helpers');

//include all the sub-components
var PodLanding = require("./children/podLanding");
var Dashboard = require("./children/dashboard");
var NewUser = require("./children/newUser");
var Login = require("./children/login");
var Contact = require("./children/contact");


var Main = React.createClass({
    getInitialState: function(){
        return{
            podSearch: '',
            results: [],
            newPodResults: [],
            title: '',
            description: '',
            keyword: '',
            url: ''
        };
    },

    createUser: function(username ,password, image) {
        console.log(username);
        console.log(password);
        console.log(image);
        helpers.postUser(username, password, image);
    },

    handleChange: function(event) {
      var newState = {};
      newState[event.target.id] = event.target.value;
      this.setState(newState);
    },
  
    handleClick: function(event) {
      event.preventDefault();
      console.log(this.state.podSearch);

      helpers.searchPods(this.state.podSearch)
      .then(function(data){

          
          var title = data[0][0].title;
          var description = data[0][0].description;
          var keyword = data[0][0].keyword;
          var url = data[0][0].podcastURL;
          

          if (data != this.state.results)
          {
            this.setState({
              results: data
            })
          }
        }.bind(this))

    },


    render: function(){
        return(
          <div className="container">
            <nav id="topNav" className="navbar navbar-default navbar-fixed-top">
              <div className="container-fluid">
                  <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>
                      <p className="navbar-brand" id="logo">PodSquad</p>
                  </div>
                  <div className="navbar-collapse collapse" id="bs-navbar">
                      <ul className="nav navbar-nav">
                          <li>
                              <Link to="/about">About</Link>
                          </li>
                          <li>
                             <Link to="/dashboard">Dashboard</Link>
                          </li>
                          <li>
                              <Link to="/contact">Contact</Link>
                          </li>
                          <li>
                            <Link to="/podLanding">Pod Landing</Link>
                          </li>
                          <li>
                            <Link to="/newUser">Sign Up</Link>
                          </li>
                      </ul>
                      <ul className="nav navbar-nav navbar-right">
                          <li>
                              <form className="navbar-form" role="search">
                                <div className="form-group">
                                <input type="text" className="form-control" id="podSearch" placeholder="Search" onChange={this.handleChange} required />
                                <button type="submit" className="btn btn-default" onClick={this.handleClick}>Search</button>
                                </div>
                              </form>
                          </li>
                      </ul>
                  </div>
              </div>
            </nav>
           
          <div className="row"> 
            <Route path="/dashboard" render={(props) => (
               <Dashboard {...props} 
               results={this.results}/>
            )} />

            <Route path="/contact" render={(props) => (
                <Contact />
            )} />

            <Route path="/podLanding" render={(props) => (
                <PodLanding {...props} 
                />
            )} />
          
            <Route path="/newUser" render={(props) => (
                <NewUser {...props} 
                  createUser={this.createUser}
                />
            )} />
          
            <Route exact path="/" render={(props) => (
                <Login/>
            )} />
            
          </div>

         
      
        <div className="spacer"></div>
      
      </div>
    )}
});

module.exports = Main;