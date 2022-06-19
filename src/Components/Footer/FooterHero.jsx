import React from "react";
import styled from "styled-components";

function FooterHero({showFooter}) {
  const StyledFooterHero = styled.div`
    position: fixed;
    bottom: ${({showFooter})=> showFooter ? "0" : "-100%"};
    width: 100vw;
    height: 15rem;
    text-align: center;
    cursor: pointer;
    background-color: rgb(83, 6, 6);
    color: white;
    padding: 5px;
    display: flex;
    justify-content:space-around;
    color: grey;
    padding-top: 1.5rem;
    transition: .3s ease-out;

    .footer__item{
        border-bottom: 4px solid grey;
    }
  `;
  return <StyledFooterHero showFooter={showFooter}>
      <div>
          <h2 className="footer__item">About Me</h2>
      </div>
      <div>
          <h2 className="footer__item">Service</h2>
      </div>
      <div>
          <h2 className="footer__item">Contact Me</h2>
      </div>
  </StyledFooterHero>;
}

export default FooterHero;
