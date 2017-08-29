// Inclue the React library
var React = require("react");
var router = require('react-router-dom');
var Link = router.Link;
var Route = router.Route;

var Login = React.createClass({

    getInitialState: function(){
        return{
          
        };
    },

    render: function() {
        return (
            <div id="login-container" className="container">    
                <div className="spacer" />
                <div id="loginbox" className="mainbox col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3"> 
                        
                    <div className="panel panel-default" >
              
                        <div className="panel-body" >
                        <h1 id="welcome">Welcome to PodSquad!</h1>
                            <form name="form" id="form" className="form-horizontal" encType="multipart/form-data" method="POST">
                               
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <input id="user" type="text" className="form-control" name="user" placeholder="UserName" />                                        
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                    <input id="password" type="password" className="form-control" name="password" placeholder="Password" />
                                </div>                                                                  
                                <div className="form-group">
                            
                                    <div className="col-sm-12 text-center">
                                        <Link to="/dashboard">
                                        <button type="submit" href="#" className="btn btn-primary"><i className="glyphicon glyphicon-log-in"></i> Log in</button></Link>
                                        <Link to="/newUser">                          
                                        <button type="submit" className="btn btn-primary"><i className="glyphicon glyphicon-pencil "></i> Sign up</button></Link>                          
                                    </div>
                                </div>
                            </form>     
                        </div>                     
                    </div>  
                </div>
            </div>
        )
    }
});

module.exports = Login;