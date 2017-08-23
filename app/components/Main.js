
var axios = require('axios');

var React = require('react');
var Link = require("react-router").Link; 
//subcomponents go here, not sure what they'll be called yet


var router = require('react-router-dom');
var Link = router.Link;
var Route = router.Route;

//include all the sub-components
var Dashboard = require("./children/Dashboard");
var newUser = require("./children/newUser");
var podLanding = require("./children/podLanding");

var helpers = require('./utils/helpers.js');

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
});

module.exports = Main;
