import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavBar = styled.nav`
  display: flex;
  width: 100vw;
  > div {
    width: 40%;
  }
  > ul {
    display: flex;
    list-style: none;
    width: 50%;
    justify-content: space-between;
  }
  a {
    text-transform: uppercase;
  }
`;

function Nav() {
  return (
    <NavBar>
      <div>
        <Link to="/">Cofesta</Link>
      </div>
      <ul>
        <Link>
          <li>About</li>
        </Link>
        <Link>
          <li>Events</li>
        </Link>
        <Link to="/gallery">
          <li>Gallery</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </NavBar>
  );
}

export default Nav;
