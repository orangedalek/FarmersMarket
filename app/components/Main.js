var React = require('react');
//subcomponents go here, not sure what they'll be called yet
// var ??? = require("./???");
var helpers = require('./utils/helpers.js');

var Main = React.createClass({
    getInitialState: function(){
        return {
            //need to see models for key names
        };
    },
    //functions to load user data, handle clicks...
    render: function(){
        return(
            <div className="container">
                <div className="navbar navbar-default">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">PodSquad</a>
                    </div>
                     <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">dashboard</a></li>
                        <li><a href="#">search</a></li>
                     </ul>
                </div>
                <div className="row">
                    <div className="col-md-8" id="pods">
                        <Pods />
                    </div>
                    <div className="col-md-4">
                        <You />
                        <YourPods />
                    </div>
                </div>
            </div>
            )
    } 
});

module.exports = Main;