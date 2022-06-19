import React from 'react';
import styled from "styled-components";

function NavList({showMenu, setShowMenu}) {
    const StyledList = styled.ul`
        // color: ${({showMenu})=> showMenu ? "black" : "green"};
        background-color: rgba(0,0,0, .8);
        width: 90vw;
        height: 90vh;
        position: fixed;
        top:0;
        right: ${({showMenu})=> showMenu ? "0" : "-100%"};
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        justify-content: center;
        align-items: center;

        li{
            width: 90%;
            text-align: center;
            
            a{
                text-decoration:none;
                color: white;
                font-size: 1.3rem;
                padding: 10px 15px;
                border-radius: 10px;

                &:hover{
                    background-color:rgb(83, 6, 6);
                }
            }

            &:hover{
                background-color: rgb(83, 6, 6);
            }
        }
    `;
  return (
    <StyledList setShowMenu={setShowMenu} showMenu={showMenu} >
        <li><a href="#" onClick={()=>setShowMenu(false)}>Home</a></li>
        <li><a href="#" onClick={()=>setShowMenu(false)}>About</a></li>
        <li><a href="#" onClick={()=>setShowMenu(false)}>Services</a></li>
        <li><a href="#" onClick={()=>setShowMenu(false)}>Contact</a></li>
    </StyledList>
  )
}

export default NavList