<<<<<<< HEAD

var axios = require('axios');

=======
//Standard imports
>>>>>>> 496ec9589b860fff650fb65d3a6497bdb09056e3
var React = require('react');

var router = require('react-router-dom');
var Link = router.Link;
var Route = router.Route;

//codebase imports
var helpers = require('./utils/helpers');

var Dashboard = require('./children/dashboard');
var PodLanding = require('./children/podLanding');

//subcomponents go here, not sure what they'll be called yet
<<<<<<< HEAD


var router = require('react-router-dom');
var Link = router.Link;
var Route = router.Route;

//include all the sub-components
var Dashboard = require("./children/Dashboard");
var newUser = require("./children/newUser");
var podLanding = require("./children/podLanding");

var helpers = require('./utils/helpers.js');

=======
// var ??? = require("./???");


>>>>>>> 496ec9589b860fff650fb65d3a6497bdb09056e3
var Main = React.createClass({
    getInitialState: function(){
        return {
            //need to see models for key names
            title: "",
            results: [],
            savedPods: []
        };
    },

    searchTerm: function(title) {
        this.setState({
            title: title,
        });
    },

    // when component updates this will run 
  componentDidUpdate: function(prevProps, prevState){

        if(prevState.title != this.state.title) {
            
            helpers.runQuery(this.state.title)
                .then(function(data){
                    console.log(data);
                    if (data != this.state.results)
                    {
                        this.setState({
                            results: data
                        })
                    }
                }.bind(this))
        }
    },

   /*
   componentDidMount: function(){
        axios.get('/api/saved')
            .then(function(response) {
                this.setState({
                    savedArticles: response.data
                });
            }.bind(this));
    },
    */
    //functions to load user data, handle clicks...

  getInitialState: function() {
    return { 'keyword': this.keyword };
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
               <Dashboard {...props} />
            )} />

            <Route exact path="/podLanding" render={(props) => (
                <PodLanding {...props} />
            )} />
          </div>

<<<<<<< HEAD
                /*
                <div className="container">    
        
    <div id="loginbox" className="mainbox col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3"> 
        
        <div className="row">                
            <div className="iconmelon">
              <svg viewBox="0 0 32 32">
                <g filter="">
                  <use xlink:href="#git"></use>
                </g>
              </svg>
            </div>
        </div>
        
        <div className="panel panel-default" >
            <div className="panel-heading">
                <div className="panel-title text-center">PodSquad!</div>
            </div>     

            <div className="panel-body" >

                <form name="form" id="form" className="form-horizontal" enctype="multipart/form-data" method="POST">
                   
                    <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                        <input id="user" type="text" className="form-control" name="user" value="" placeholder="User" />                                        
                    </div>

                    <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                        <input id="password" type="password" className="form-control" name="password" placeholder="Password" />
                    </div>                                                                  

                    <div className="form-group">
                        <div className="col-sm-12 controls">
                            <button type="submit" href="#" className="btn btn-primary pull-right"><i className="glyphicon glyphicon-log-in"></i> Log in</button>                          
                        </div>
                    </div>

                </form>     

            </div>                     
        </div>  
    </div>
</div>
{this.props.children}
            */
    
            )


    } 
=======
        </div>
      );
    }
>>>>>>> 496ec9589b860fff650fb65d3a6497bdb09056e3
});

module.exports = Main;