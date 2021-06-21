import React from "react";

import "./homepage.styles.scss";
import { HomepageContainer } from "./homepage.styles.jsx";
import SignInOption from "../../components/sign-in-option/sign-in-option.component";

import Directory from "../../components/directory/directory.component";
import { connect } from "react-redux";

const HomePage = ({ hidden }) => (
  <HomepageContainer>
    {hidden ? null : <SignInOption />}
    <Directory />
  </HomepageContainer>
);

const mapStateToProps = (state) => ({
  hidden: state.signInOption.hidden,
});

export default connect(mapStateToProps)(HomePage);
