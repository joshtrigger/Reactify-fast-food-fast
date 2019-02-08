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
      message: "",
      loading: "Register",
      isDisabled: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.message == "User created successfully") {
      toast.success(nextProps.message);
      setTimeout(() => {(window.location.href = "/login")}, 3000);
    } else {
      toast.error(nextProps.message);
      this.setState({ loading: "Register", isDisabled: false });
    }
  }

  handleSubmit = e => {
    const { SignUpAction } = this.props;
    e.preventDefault();
    SignUpAction(this.state);
    this.setState({ loading: "Registering...", isDisabled: true });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, isDisabled } = this.state;
    return (
      <SignUpView
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        loading={loading}
        isDisabled={isDisabled}
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
