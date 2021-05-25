import React from "react";

import "./homepage.styles.scss";
import { HomepageContainer } from "./homepage.styles.jsx";

import Directory from "../../components/directory/directory.component";
import MenuItem from "../../components/menu-item/menu-item.component";

const HomePage = () => (
  <HomepageContainer>
    <Directory />
  </HomepageContainer>
);

export default HomePage;
