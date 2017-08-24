var Login = React.createClass({
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
});