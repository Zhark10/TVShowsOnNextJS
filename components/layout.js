import React from 'react'
import Nav from './nav'
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => (
    <div className='main'>
        <Nav />

        <Container>
            <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>{children}</Col>
            </Row>
        </Container>

        <style jsx>{`
            .main {
                width: 60%;
                margin: 0 auto;
            }
        `}</style>
    </div>
)

export default Layout
