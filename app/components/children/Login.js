//Standard imports
var React = require('react');

var router = require('react-router-dom');
var Link = router.Link;
var Route = router.Route;

//codebase imports
var helpers = require('./utils/helpers');

var Dashboard = require('./children/dashboard');
var PodLanding = require('./children/podLanding');


var Login = React.createClass({

  getInitialState: function() {
    //allows us to identify which user it is and pass their id as props
    return { 'user' : this._id };
  },

    render: function(){
      return(
        <div className="container">
            
          <div className="row"> 
            <Route exact path="/" render={(props) => (
               <Dashboard />
            )} />

            <Route exact path="/podLanding" render={(props) => (
                <PodLanding />
            )} />
          </div>

        </div>
      );
    }
});

module.exports = Login;