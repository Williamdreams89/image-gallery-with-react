import React from "react";
import styled from "styled-components";
import BigScreenNavList from "./BigScreenNavList";
import Hamburger from "./Haburger";

function Navbar({ showMenu }) {
  const StyledNavbar = styled.div`
    background-color: rgb(83, 6, 6);
    color: white;
    height: 3rem;
    @media screen and (min-width: 761px) {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    @media screen and (max-width: 760px) {
      h2 {
        padding: 10px 26px;
      }
    }
  `;
  return (
    <StyledNavbar>
      <h2>William's Gallery</h2>
      <Hamburger showMenu={showMenu} />
      <BigScreenNavList />
    </StyledNavbar>
  );
}

export default Navbar;
