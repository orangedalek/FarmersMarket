// add dependencies
var React = require('react');

//codebase imports
var helpers = require('../utils/helpers');

var NewUser = React.createClass({


  getInitialState: function() {
    return {
      username: '',
      password: '',
      email: '',
      pods: [],
      errors: {},
      user: {
        email: '',
        username: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  },

  changeUser: function(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({user});
  },

  processForm: function(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const username = encodeURIComponent(this.state.user.username);
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `username=${username}&email=${email}&password=${password}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/signup');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        console.log('The form is valid');
      } else {
        // failure

        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  },

  handleClick: function(event) {
    event.preventDefault();
    this.props.createUser(this.state.username, this.state.password, this.state.email);
    this.setState({username:'', password: '', email: ''});
  },

  // componentDidMount: function(){
  //   helpers.getSaved().then(function() {
  //     var data = returned.data
  //     this.setState({saved: data})
  //   });
  // }
  //
  // componentDidUpdate: function() {
  //
  // }

  //redirect to the Main.js "/" route

  render: function() {
    return (
            <div>
              <div className="spacer" />
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-body text-center">
                          <h2 className="panel-title text-center loopy">Sign Up</h2>
                            <form>
                                <div className="form-group">
                                    <h4 className=""><strong>Username</strong></h4>
                                    <input type="text" className="form-control text-center" id="username" placeholder="Enter your username." onChange= {this.changeUser} required/>
                                    <br />
                                    <h4 className=""><strong>Password</strong></h4>
                                    <input type="text" className="form-control text-center" id="password" placeholder="Enter your password." onChange= {this.changeUser} required/>
                                    <br />
                                    <h4 className=""><strong>Email</strong></h4>
                                    <input type="text" className="form-control text-center" id="email" placeholder="Enter your email address." onChange= {this.changeUser} required/>
                                    <br />
                                    {/* <h4 className=""><strong>End Year</strong></h4>
                                    <input type="text" className="form-control text-center" id="endYear" placeholder="2017"onChange= {this.handleChange} required/>
                                    <br /> */}
                                    <button type="button" className="btn btn-primary" onSubmit={this.processForm}>Submit My Info</button> 
                                    user={this.state.user}    
                                </div>
                          </form>
                        </div>
                    </div>
          {/* {db.User.save({username: this.state.username, password: this.state.password, image: this.state.image, pods: this.state.pods})} */}
                    {/*this.state.displayResults ? <Results results={this.props.results} saveArticle={this.props.[this.props.saveArticle]} /> : null */}
                </div>
      </div>
    )}
});

//exports the User
module.exports = NewUser;
