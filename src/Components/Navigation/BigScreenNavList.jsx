import React from "react";
import styled from "styled-components";

function BigScreenNavList() {
    const StyledNavbar = styled.ul`
        display: flex;
        list-style: none;
        justify-content: space-between;
        width: 60%;
        max-width: 800px;
        a{
            color: white;
            text-decoration: none;
            font-size: 1.3rem;
            padding: 3px 15px;
            border-radius: 21px;
            transition: .3s ease;

            &:hover{
                background-color: white;
                color: rgb(83, 6, 6);
            }
        }

        @media screen and (max-width: 760px){
            display: none;
        }
    `;
  return (
    <StyledNavbar>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Service</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </StyledNavbar>
  );
}

export default BigScreenNavList;
