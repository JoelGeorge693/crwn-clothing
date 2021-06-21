import React from "react";
import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in-option.styles.scss";
import { connect } from "react-redux";
import hideSignInOption from "../../redux/sign-in-option/sign-in-option.actions";

const SignInOption = ({ history, hideSignInOption }) => (
  <div className="box">
    <CustomButton
      onClick={() => {
        return history.push("/signin"), hideSignInOption();
      }}
    >
      Sign In
    </CustomButton>
    <CustomButton onClick={hideSignInOption}>Continue as a guest</CustomButton>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  hideSignInOption: () => dispatch(hideSignInOption()),
});

export default withRouter(connect(null, mapDispatchToProps)(SignInOption));
