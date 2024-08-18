import React, { Fragment, useState } from "react";

import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./navbar.scss";
import { menuItems } from "../utils/enumsNModals/navbar";

const AppNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState("");

  const handleMouseEnter = (id: string) => {
    setDropdownOpen(id);
  };
  const handleMouseLeave = (id: string) => {
    setDropdownOpen("");
  };

  return (
    <header className="mt-0 d-flex justify-content-center nav-bar">
      <Navbar expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              {menuItems.map((nav) => (
                <Fragment key={nav.title}>
                  {(!nav.subMenu || nav.subMenu.length === 0) && (
                    <LinkContainer to={nav.url ?? "/"}>
                      <Nav.Link key={nav.title} className=" mx-2">
                        {nav.title}
                      </Nav.Link>
                    </LinkContainer>
                  )}
                  {nav.subMenu && nav.subMenu.length > 0 && (
                    <NavDropdown
                      title={nav.title}
                      id={nav.title}
                      show={dropdownOpen === nav.title}
                      onMouseEnter={() => handleMouseEnter(nav.title)}
                      onMouseLeave={() => handleMouseLeave(nav.title)}
                      className=" mx-2"
                    >
                      {nav.subMenu?.map((sub) => (
                        <LinkContainer
                          key={sub.title}
                          to={sub.url ?? nav.title.toLowerCase()}
                        >
                          <NavDropdown.Item>{sub.title}</NavDropdown.Item>
                        </LinkContainer>
                      ))}
                    </NavDropdown>
                  )}
                </Fragment>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default AppNavbar;
