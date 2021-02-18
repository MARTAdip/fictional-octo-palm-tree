import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
// import Logo from './Logo';

export default function Nav() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Hot Now</Link>
        </li>
        <li>
          <Link to="/plants/">Plants</Link>
        </li>
        <li>
          <Link to="/">LOGOO</Link>
        </li>
        <li>
          <Link to="/florists">Florists</Link>
        </li>
        <li>
          <Link to="/order">Order Ahead!</Link>
        </li>
      </ul>
    </>
  );
}
