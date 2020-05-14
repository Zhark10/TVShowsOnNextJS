import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Colors from '../utils/colors';

const Nav = () => {
  const router = useRouter();
  const isMain = router.pathname === '/';
  return (
    <nav
      style={{
        position: 'fixed',
        width: '100vw',
        height: 54,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: Colors.secondaryColor.light87,
        zIndex: 999,
      }}
    >
      <Link href="/">
        <div
          style={{
            color: Colors.mainColor.dark54,
            fontSize: 24,
            fontWeight: 700,
            paddingLeft: 16,
            cursor: 'pointer',
            display: isMain ? 'none' : 'flex',
          }}
        >
          go to home
        </div>
      </Link>
    </nav>
  );
};

export default Nav;
