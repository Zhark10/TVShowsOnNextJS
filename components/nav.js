import React from 'react';
import Link from 'next/link';

const Nav = () => (
  <nav>
    <ul>
      <div>
        <Link href="/">
          <div>go to home</div>
        </Link>
      </div>
    </ul>

    <style jsx>{`
      ul {
        width: 100%;
        height: 50px;
        background-color: #e9ecef;
        display: flex;
        align-items: center;
      }
      ul div {
        font-size: 24px;
        color: rgba(0, 0, 0, 0.54);
        text-decoration: none;
      }
    `}</style>
  </nav>
);

export default Nav;
