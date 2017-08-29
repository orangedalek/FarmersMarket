var axios = require('axios');

//Standard imports
var React = require('react');
var router = require('react-router-dom');
var Link = router.Link;
var Route = router.Route;

//call in the helper func
var helpers = require('./utils/helpers');

//include all the sub-components
var PodLanding = require("./children/PodLanding");
var Dashboard = require("./children/Dashboard");
var NewUser = require("./children/NewUser");
var Login = require("./children/Login");
var Contact = require("./children/contact");


var Main = React.createClass({
    getInitialState: function(){
        return{

        };
    },

    createUser: function(username ,password, image) {
        console.log(username);
        console.log(password);
        console.log(image);
        helpers.postUser(username, password, image);
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
                             <Link to="/Dashboard">Dashboard</Link>
                          </li>
                          <li>
                              <Link to="/Contact">Contact</Link>
                          </li>
                          <li>
                            <Link to="/PodLanding">Pod Landing</Link>
                          </li>
                          <li>
                            <Link to="/NewUser">Sign Up</Link>
                          </li>
                      </ul>
                      <ul className="nav navbar-nav navbar-right">
                          <li>
                              <form className="navbar-form" role="search">
                                <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search" />
                                <button type="submit" className="btn btn-default" onClick={this.handleClick}>Search</button>
                                </div>
                              </form>
                          </li>
                      </ul>
                  </div>
              </div>
            </nav>
           
          <div className="row"> 
            <Route path="/Dashboard" render={(props) => (
               <Dashboard {...props} />
            )} />

            <Route path="/Contact" render={(props) => (
                <Contact />
            )} />

            <Route path="/PodLanding" render={(props) => (
                <PodLanding {...props} />
            )} />
          
            <Route path="/NewUser" render={(props) => (
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