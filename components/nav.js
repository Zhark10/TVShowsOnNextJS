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
        alignItems: 'center',
        backgroundColor: Colors.mainColor.dark0,
        display: isMain ? 'none' : 'flex',
        zIndex: 999,
      }}
    >
      <Link href="/">
        <div
          style={{
            color: Colors.secondaryColor.light0,
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
};

export default Nav;
