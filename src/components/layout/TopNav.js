import React from "react";
import { connect } from "react-redux";
import { Navbar } from "reactstrap";


const TopNav = props => {
  return (
    <Navbar bg="primary" variant="dark">
      <h3>Hack My Dish</h3>
    </Navbar> 
  );
};

export default connect()(TopNav);