import React from 'react';
import Nav from './nav';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => (
  <div className="main">
    <Nav />

    <Container>{children}</Container>

    <style jsx>{`
      .main {
        width: 100%;
        margin: 0 auto;
        padding-bottom: 64px;
      }
    `}</style>
  </div>
);

export default Layout;
