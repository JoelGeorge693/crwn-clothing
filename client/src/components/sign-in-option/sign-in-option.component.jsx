import React from "react";
import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in-option.styles.scss";
import { connect } from "react-redux";
import hideSignInOption from "../../redux/sign-in-option/sign-in-option.actions";
import { RemoveButtonContainer } from "../check-out-cart-items/check-out-cart-items.styles";

const SignInOption = ({ history, hideSignInOption }) => (
  <div className="outer-box">
    <RemoveButtonContainer className="cross" onClick={hideSignInOption}>
      &#10005;
    </RemoveButtonContainer>
    <div className="box">
      <CustomButton
        onClick={() => {
          return history.push("/signin"), hideSignInOption();
        }}
      >
        Sign In
      </CustomButton>
      <CustomButton onClick={hideSignInOption}>
        Continue as a guest
      </CustomButton>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  hideSignInOption: () => dispatch(hideSignInOption()),
});

export default withRouter(connect(null, mapDispatchToProps)(SignInOption));
