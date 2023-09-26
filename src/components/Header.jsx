import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/Header.css';

// define Header component
function Header() {
    return (
        <>
            <Container fluid className='bg'>
                <Row className='justify-content-center text-center mb-0'>
                    <Col className='pb-0'>
                        <h1 className='text-black' style={{ fontSize: '65px' }}>
                            <Link to='/Delia-Young-Portfolio' className='text-black text-decoration-none' style={{ margin: '0' }}>
                                <h>Delia Young</h>
                                <img src="https://media.giphy.com/media/24652QfeZzNIPzoH36/giphy.gif" />
                                <h>Software Developer</h>
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
