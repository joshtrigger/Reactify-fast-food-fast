import React, { Component } from "react";
import LoginView from "../../components/Login/LoginView";
import { LoginAction } from "../../actions/LoginAction";
import { connect } from "react-redux";
import { toast } from "react-toastify";

export class Login extends Component {
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
    console.log(nextProps);
    if (
      nextProps.message === "You are successfully logged in" ||
      nextProps.message === "welcome admin"
    ) {
      toast.success(nextProps.message);
    }else{
      toast.error(nextProps.message)
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.LoginAction(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <LoginView
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        message={this.state.message}
      />
    );
  }
}

export const mapStateToProps = state => {
  return {
    message: state.login.message.message
  };
};

export default connect(
  mapStateToProps,
  { LoginAction }
)(Login);
