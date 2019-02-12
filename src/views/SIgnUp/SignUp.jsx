import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import SignUpView from "../../components/Signup/SignUpView";
import { SignUpAction } from "../../actions/SignUpAction";

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
      toast.success(nextProps.message);
      setTimeout(function(){window.location.href = "/login", 2000})
    } else {
      toast.error(nextProps.message);
    }
  }

  handleSubmit = e => {
    const { SignUpAction } = this.props;
    e.preventDefault();
    SignUpAction(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { message } = this.state;
    return (
      <SignUpView
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        message={message}
      />
    );
  }
}

SignUp.propTypes = {
  SignUpAction: PropTypes.func.isRequired,
  message: PropTypes.shape({})
};

SignUp.defaultProps = {
  message: {}
};

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
