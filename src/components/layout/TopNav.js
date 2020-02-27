import React from "react";
import { connect } from "react-redux";
import { Navbar } from "reactstrap";


const TopNav = props => {
  return (
    <Navbar inverse color="primary">
      <h3>Hack My Dish</h3>
    </Navbar> 
  );
};

export default connect()(TopNav);