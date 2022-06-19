import React, { useState } from "react";
import styled from "styled-components";
import NavList from "./NavList";

function Hamburger() {
  const [showMenu, setShowMenu] = useState(false);

  const StyledBurger = styled.div`
    position: absolute;
    right: 25px;
    top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    transition: all 0.3s ease-in;
    z-index: 2;
    cursor: pointer;

    div {
      width: 2rem;
      height: 0.25rem;
      background-color: white;
      border-radius: 10px;
      transform-origin: 3px;
      transition: all 0.3s ease-in;

      &:nth-child(1) {
        transform: ${({ showMenu }) =>
          showMenu ? "rotate(45deg)" : "rotate(0)"};
      }
      &:nth-child(2) {
        transform: ${({ showMenu }) =>
          showMenu ? "translateX(100px)" : "translateX(0)"};
      }
      &:nth-child(3) {
        transform: ${({ showMenu }) =>
          showMenu ? "rotate(-45deg)" : "rotate(0)"};
      }
    }

    @media screen and (min-width: 761px) {
      display: none;
    }
  `;
  return (
    <>
      <StyledBurger showMenu={showMenu} onClick={() => setShowMenu(!showMenu)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavList showMenu = {showMenu} setShowMenu={setShowMenu} />
    </>
  );
}

export default Hamburger;
