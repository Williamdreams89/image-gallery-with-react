import React, { useState } from "react";
import styled from "styled-components";
import FooterHero from "./FooterHero";

function FooterInit() {
  const [showFooter, setShowFooter] = useState(false);

  const FooterInitiator = styled.h2`
    background-color: rgb(83, 6, 6);
    color: white;
    position: fixed;
    // bottom: 13.4rem;
    bottom: ${({showFooter})=> showFooter ? "13.4rem": "0"};
    left: 45%;
    transform:translateX(50%);
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: ${({ showFooter }) =>
      showFooter ? "rotate(180deg)" : "rotate(0)"};
    z-index: 3;
    cursor: pointer;
    margin-top: 5rem;
  `;
  return (
    <>
      <FooterInitiator
        showFooter={showFooter}
        onClick={() => setShowFooter(!showFooter)}
      >
        ^
      </FooterInitiator>
      <FooterHero showFooter ={showFooter} />
    </>
  );
}

export default FooterInit;
