import React from 'react';
import Link from 'next/link';
import Colors from '../utils/colors';

const Nav = () => (
  <nav
    style={{
      position: 'fixed',
      width: '100vw',
      height: 54,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: Colors.secondaryColor.light12,
    }}
  >
    <Link href="/">
      <div
        style={{
          color: Colors.secondaryColor.light54,
          fontSize: 24,
          fontWeight: 700,
          paddingLeft: 16,
          cursor: 'pointer',
        }}
      >
        go to home
      </div>
    </Link>
  </nav>
);

export default Nav;
