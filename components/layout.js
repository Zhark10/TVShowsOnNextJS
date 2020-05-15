import React from 'react';
import { Container } from 'reactstrap';
import { useRouter } from 'next/router';
import Nav from './nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Colors from '../utils/colors';

const Layout = ({ children }) => {
  const router = useRouter();
  const isMain = router.pathname === '/';
  return (
    <div
      style={{
        backgroundColor: Colors.mainColor.dark87,
      }}
      className="main"
    >
      <Nav />

      <Container
        style={{
          paddingTop: isMain ? 12 : 64,
        }}
      >
        {children}
      </Container>

      <style jsx>{`
        body {
          background-color: ${Colors.mainColor.dark54};
        }
        .main {
          background-color: ${Colors.mainColor.dark54};
          min-height: 100vh;
          width: 100%;
          margin: 0 auto;
          padding-bottom: 64px;
        }
      `}</style>
    </div>
  );
};

export default Layout;
