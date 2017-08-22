var axios = require('axios');
var React = require('react');
//subcomponents go here, not sure what they'll be called yet
// var ??? = require("./???");
var router = require('react-router-dom');
var Link = router.Link;
var Route = router.Route;

//include all the sub-components
var dashboard = require("./children/dashboard");
var newUser = require("./children/newUser");
var podLanding = require("./children/podLanding");

var helpers = require('./utils/helpers.js');

var Main = React.createClass({
    getInitialState: function(){
        return {
            //need to see models for key names

        };
    },
    //functions to load user data, handle clicks...
    render: function() {
        return(
            <div className="container">
                <div className="row">
                  <div className="jumbotron text-center" style={{'backgroundImage': 'url(./assets/img/background.jpg)', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center', 'backgroundSize': '100% 100%', 'backgroundAttachment': 'fixed'}}>
                    <h2 className="text-center"style={{'color': 'white', 'fontWeight': 'bold', 'fontSize': '48px'}}>PodSquad</h2>
                    <p className="text-center" style={{'color': 'white'}}>
                      <em>Search for an podcast and join!</em>
                    </p>
                    <hr />
                    <p>
                    <Link to="/"><button className="btn btn-primary btn-lg">Search Podcasts</button></Link>
                    <Link to="/podLanding"><button className="btn btn-danger btn-lg">Pod Landing</button></Link>
                    </p>
                  </div>
                  </div>

                   <div className="row">

                        <Route exact path="/" render={(props) => (
                           <dashboard {...props} />
                        )} />

                        <Route exact path="/podLanding" render={(props) => (
                            <podLanding {...props} />
                        )} />
                 </div>

          </div>
     );
   }
});

module.exports = Main;
