import React from "react";
import PropTypes from "prop-types";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";

export const SignUpView = props => {
  const { onChange, onSubmit } = props;
  return (
    <MDBContainer className="w-75  pt-5 mt-3 mb-5">
      <MDBRow className="flex flex-center">
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form onSubmit={onSubmit}>
                <p className="h4 text-center mb-4">Sign up</p>
                <label
                  htmlFor="defaultFormRegisterNameEx"
                  className="black-text"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                  onChange={onChange}
                  required
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterEmailEx"
                  className="black-text"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="defaultFormRegisterEmailEx"
                  className="form-control"
                  onChange={onChange}
                  required
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterConfirmEx"
                  className="black-text"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="defaultFormRegisterConfirmEx"
                  className="form-control"
                  onChange={onChange}
                  required
                />
                <br />
                <div className="text-center mt-4">
                  <MDBBtn color="brown" type="submit">
                    Register
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

SignUpView.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SignUpView;
