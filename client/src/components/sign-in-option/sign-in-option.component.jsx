import React from "react";
import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import { OuterBox, Box } from "./sign-in-option.styles.jsx";
import { connect } from "react-redux";
import hideSignInOption from "../../redux/sign-in-option/sign-in-option.actions";
import { RemoveButtonContainer } from "../check-out-cart-items/check-out-cart-items.styles";

const SignInOption = ({ history, hideSignInOption }) => (
  <OuterBox>
    <RemoveButtonContainer onClick={hideSignInOption}>
      &#10005;
    </RemoveButtonContainer>
    <Box className="box">
      <CustomButton
        onClick={() => {
          return history.push("/signin"), hideSignInOption();
        }}
      >
        Sign In
      </CustomButton>
      <CustomButton onClick={hideSignInOption}>I'm a guest</CustomButton>
    </Box>
  </OuterBox>
);

const mapDispatchToProps = (dispatch) => ({
  hideSignInOption: () => dispatch(hideSignInOption()),
});

export default withRouter(connect(null, mapDispatchToProps)(SignInOption));
