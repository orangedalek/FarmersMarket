//Standard imports
var React = require('react');
var Link = require("react-router").Link; 

//codebase imports
var helpers = require('./utils/helpers');

//subcomponents go here, not sure what they'll be called yet
// var ??? = require("./???");


var Main = React.createClass({

  getInitialState: function() {
    return { 'keyword': this.keyword };
  },

    render: function(){
        return(
            <div className="container">
              <nav className="navbar navbar-default">
                <div className="navbar-header">
                  <a className="navbar-brand" href="/">PodSquad</a>
                </div>
                <div className="nav navbar-right">
                  <Link to="/user/:id"><button className="btn btn-primary btn-lg">Dashboard</button></Link>
                  <form className="navbar-form" role="search">
                    <div className="form-group">
                    <input type="text" className="form-control text-center" id="title" placeholder="search" onChange= {this.handleChange} required/>
                    </div>
                    <button type="submit" className="btn btn-default" onClick={this.handleClick}>Search</button>
                  </form>
                </div>
              </nav>

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