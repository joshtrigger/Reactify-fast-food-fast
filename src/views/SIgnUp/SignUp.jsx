import React, { Component } from "react";
import SignUpView from "../../components/Signup/SignUpView";
import { SignUpAction } from "../../actions/SignUpAction";
import { connect } from "react-redux";
import { toast } from 'react-toastify';

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      message: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.message == "User created successfully") {
      toast.success(nextProps.message)
      // window.location.href = "/login"
    } else {
      toast.error(nextProps.message)
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.SignUpAction(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <SignUpView
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        message={this.state.message}
      />
    );
  }
}

export const mapStateToProps = state => {
  return {
    message: state.signup.message.message
  };
};

export default connect(
  mapStateToProps,
  {
    SignUpAction
  }
)(SignUp);
