//Standard imports
var React = require('react');

var router = require('react-router-dom');
var Link = router.Link;
var Route = router.Route;

//codebase imports
var helpers = require('./utils/helpers');

var Dashboard = require('./children/dashboard');
// var PodLanding = require('./children/Login');

//subcomponents go here, not sure what they'll be called yet
// var ??? = require("./???");


var Main = React.createClass({

  getInitialState: function() {
    //checks for user's id, and if there is none, goes to login??
    return { userId: this._id };
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
                      <a className="navbar-brand page-scroll" href="#first"><i className="ion-ios-analytics-outline"></i>PodSquad</a>
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
            <Route exact path="/" render={(props) => (
               <Dashboard />
            )} />

            <Route exact path="/login" render={(props) => (
                <Login />
            )} />
          </div>

        </div>
      );
    }
});

module.exports = Main;