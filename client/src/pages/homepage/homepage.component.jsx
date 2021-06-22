import React from "react";

import "./homepage.styles.scss";
import { HomepageContainer } from "./homepage.styles.jsx";
import SignInOption from "../../components/sign-in-option/sign-in-option.component";
import { createStructuredSelector } from "reselect";
import Directory from "../../components/directory/directory.component";
import { connect } from "react-redux";
import { hiddenCurrentValue } from "../../redux/sign-in-option/sign-in-option.selectors";

const HomePage = ({ hidden }) => (
  <HomepageContainer>
    {hidden ? null : <SignInOption />}
    <Directory />
  </HomepageContainer>
);

const mapStateToProps = createStructuredSelector({
  hidden: hiddenCurrentValue,
});

export default connect(mapStateToProps)(HomePage);
