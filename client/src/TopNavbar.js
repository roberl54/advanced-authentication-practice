import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopNavbar = (props) => {
  let secretNavItems = "";
  if (props.showNavItems) {
    secretNavItems =
      <Nav pullRight>
        <Link to="/secret">
          <Navbar.Text>
            Secret
          </Navbar.Text>
        </Link>
        <NavDropdown title="Secret Things" id="nav-dropdown">
          <MenuItem>
            <Link to="/secret/secretcomponent1">
              Secret Component 1
            </Link>
          </MenuItem>
          <MenuItem divider />
          <MenuItem>
            <Link to="/secret/secretcomponent2">
              Secret Component 2
            </Link>
          </MenuItem>
          <MenuItem divider />
          <MenuItem>
            <Link to="/secret/secretcomponent3">
              Secret Component 3
            </Link>
          </MenuItem>
        </NavDropdown>
      </Nav>
    ;
  }
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Collapse>

        <Nav pullRight>
          <NavItem onClick={props.onSignOut}>Sign Out</NavItem>
        </Nav>

        {secretNavItems}

      </Navbar.Collapse>
    </Navbar>
  );
};

TopNavbar.propTypes = {
  onSignOut: PropTypes.func.isRequired,
  showNavItems: PropTypes.bool.isRequired
};

export default TopNavbar;
