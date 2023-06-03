/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="https://github.com/orgs/HWU-A/repositories">
              HWU-A github
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/breadman98">이승우</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/YooSungSoo">유성수</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/xodnz">김태욱</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/BaxDailyGit">백승진</NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> by{" "}
          <a href="https://github.com/orgs/HWU-A/repositories" target="_blank">
            HWU-A Team
          </a>{" "}
          for a Software Engineering Project
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
