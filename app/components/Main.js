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


var Main = React.createClass({
    getInitialState: function(){
        return {
            //need to see models for key names
            title: "",
            results: [],
            savedPods: [],
            keyword: this.keyword
        };
    },

    createUser: function(username ,password, image) {
        console.log(username);
        console.log(password);
        console.log(image);
        helpers.postUser(username, password, image);
    },

    // when component updates this will run 
  componentDidUpdate: function(prevProps, prevState){
        /*
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
        */
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
    //functions to load user data, handle clicks..

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
                             <Link to="/Dashboard">Dashboard</Link>
                          </li>
                          <li>
                              <Link to="/contact">Contact</Link>
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
            <Route exact path="/Dashboard" render={(props) => (
               <Dashboard {...props} />
            )} />

            <Route exact path="/PodLanding" render={(props) => (
                <PodLanding {...props} />
            )} />
          

          <Route exact path="/NewUser" render={(props) => (
                <NewUser {...props} 
                createUser={this.createUser}
                />
            )} />

          <hr />
          <div className="container">    
        
          <div id="loginbox" className="mainbox col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3"> 
        
        {/* dont think we can use namespace tags in react, but we can add to css later}
        <div className="row">                
            <div className="iconmelon">
              <svg viewBox="0 0 32 32">
                <g filter="">
                  <use xlink:href="#git"></use>
                </g>
              </svg>
            </div>
        </div>
        */}

        
                <div className="panel panel-default" >
                    <div className="panel-heading">
                        <div className="panel-title text-center">Welcome to PodSquad!</div>
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
                            {/*can we add another button to signup which redirects to /NewUser */}
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
        </div>
        </div>
      );
    }
});

module.exports = Main;