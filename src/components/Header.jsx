import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/Header.css';

// define Header component
function Header() {
    return (
        <>
            <Container fluid className='bg-dark'>
                <Row className='justify-content-center text-center mb-0'>
                    <Col className='pb-0'>
                        <h1 className='text-pink' style={{ fontSize: '70px' }}>
                            <Link to='/Delia-Young-Portfolio' className='text-pink text-decoration-none' style={{ margin: '0' }}>
                                Delia Young
                            </Link>
                        </h1>
                    </Col>
                </Row>
            </Container>
            <Navigation />
        </>
    );
}

// export Header component
export default Header;
