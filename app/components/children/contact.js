var React = require('react');

var Contact = React.createClass({

render: function() {
    return (

    <div className="row">
        <div className="spacer"></div>
        <div className="col-md-12" id="spacer-contact">
    </div>
        
    <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
            <div className="panel panel-default">
                <div id="contact-info" className="panel-body">
                    <h3 id="contact-us" className="loopy">Contact Us</h3>
                    <hr />
                </div>
            </div>
        <div className="col-md-2"></div>
        </div>
    </div>
    <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-3">
            <div className="panel panel-default">
                <div id="jennie" className="panel-body">
                    <h3 className="loopy">Jennie Snider</h3>
                    <img className="contact-pic" src="../assets/images/jennie.jpg" /> 
                    <a href="mailto:jasniner@mac.com">Email Me!</a>
                    <div>
                        <a href="https://www.linkedin.com/in/jenniesnider/"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-3">
            <div className="panel panel-default">
                <div id="charlotte" className="panel-body">
                    <h3 className="loopy">Charlotte Astle</h3>
                    <img className="contact-pic" src="../assets/images/charlotte.jpg" />
                    <a href="mailto:charlotteoa@icloud.com">Email Me!</a>
                    <div>
                        <a href="https://www.linkedin.com/in/charlotte-astle/"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-2"></div>
    
    </div>
    <div className="row">
        <div className="col-md-2"></div>  
        <div className="col-md-3">
            <div className="panel panel-default">
                <div id="ken" className="panel-body">
                    <h3 className="loopy">Kenneth Wong</h3>
                    <img className="contact-pic" src="../assets/images/ken.jpg" />
                    <a href="mailto:kennethlw@gmail.com">Email Me!</a>
                    <div>
                        <a href="https://www.linkedin.com/in/kenneth-wong-2bb329141/"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-3">
            <div className="panel panel-default">
                <div id="austin" className="panel-body">  
                    <h3 className="loopy">Austin Lee</h3>
                    <img className="contact-pic" src="../assets/images/austin.jpg" />
                    <a href="mailto:austin.alexander.lee@gmail.com">Email Me!</a>
                    <div>
                        <a href="https://www.linkedin.com/in/aalexanderlee/"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-md-2"></div>
        </div>
      </div>
    </div>
    )
  }
});

module.exports = Contact;