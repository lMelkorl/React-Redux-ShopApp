import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import CartSummary from "../cart/CartSummary";
import './Navi.css';

export default class Navi extends React.Component {
  render() {
    return (
      <div>
        <Navbar className="navidiv" color="light" light expand="md">
          <NavbarBrand><Link to="/" style={{ textDecoration: "none" }}>lMelkorl Shop</Link></NavbarBrand>
          <NavbarToggler />
            <Nav navbar>
                <NavItem>
                <CartSummary />
              </NavItem>

              <NavItem className="navi">
                <NavLink href="/saveproduct">Add Product</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}