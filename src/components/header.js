import * as React from "react"
import styled from "styled-components"

import { Link } from "gatsby";



const HeaderStyled = styled.header`
  /* border: solid 1px red; */
  padding-block: 1rem;
  /* height: 10px; */
  display: flex;
  /* align-items: center; */
  justify-content: flex-end;
  margin-bottom: 2rem;
  max-width: 100%;
  box-shadow: 0 1px 1px rgba(47,47,47,10%);
  padding-block: 0.75rem;
  padding-inline: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--light-background);
  width: 100vw;
  z-index: 2;

  p {
    margin: 0;
    padding: 0;
    color: var(--text-black);
    font-size: 1.25rem;
  }
`

const Navbar = {
  Wrapper: styled.nav`
    /* margin-top: -1.45rem; */
    /* margin-bottom: 0.5rem; */
    max-width: 963px;
    background-color: var(--light-background);
    
    /* from article */
    /* padding: 1rem 3rem; */
    /* align-items: center; */
    /* 40em == 640px */
    /* @media only screen and (max-width: 40em) {
      position: fixed;
      width: 100vw; */
      /* bottom: 0; if want nav to be on bottom*/
    /* } */
    `,

  Items: styled.ul`
    /* margin-bottom: 1.45rem; */
    display: flex;
    gap: 2rem;
    /* justify-content: end; */
    /* center on mobile */
    justify-content: center;
    align-items: center;
    list-style-type: none;
    margin: auto;
  `,

  Item: styled.li`
    padding: 0.25rem 0.5rem;
    margin: 0;
    cursor: pointer;
    font-size: 0.80rem;
    /* article */
    /* padding: 0 1rem; */
  `,
  ItemIsActivePage: styled.li`
    font-size: 0.80rem;
    padding: 0.25rem 0.5rem;
    margin: 0;
    cursor: pointer;
    text-decoration: underline var(--red-btn-color-darker) 2px;
  `
}

const Header = () => (
  <HeaderStyled>
    {/* <p>Company Name MWRs</p> */}
    <Navbar.Wrapper>
      <Navbar.Items>

        <Navbar.Item>
          <Link to="/">Home</Link>
        </Navbar.Item>

        <Navbar.Item>
          <Link to="/admin">Admin.</Link>
        </Navbar.Item>

        <Navbar.ItemIsActivePage>
          <Link to="/settings">Settings</Link>
        </Navbar.ItemIsActivePage>

      </Navbar.Items>
    </Navbar.Wrapper>
  </HeaderStyled>
)

export default Header