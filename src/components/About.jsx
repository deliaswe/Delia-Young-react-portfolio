import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import avator from '../images/headshot.jpg';
import Marquee from 'react-fast-marquee';
import '../style/About.css';

function About() {
    return (
        // About section
        <section id='about' className='py-5'>
            <h1 className='about-heading'>About Me</h1>
            <Container>
                <Row>
                    <Col
                    xs={12}
                    md={4}
                    className='d-flex justify-content-center align-items-center mb-4 mb-md-0'
                    >
                        <Image src={avator} rounded fluid className='about-image' />
                    </Col>
                    <Marquee
                        gradient={false}
                        speed={60}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        directions='left'
                        >
                        </Marquee>
                    <Col xs={12} md={8}>
                        <Card>
                            <Card.Body>
                                <Card.Title className='text-center mb-4'>
                                    About Delia Young
                                </Card.Title>
                                <Card.Text>
                                    Delia Young, a passionate and creative software developer with a background in the healthcare and interior architecture, is a recent graduate of Columbia University Full Stack Web Development Bootcamp. I am highly motivated and detail-oriented individual with a passion for learning and a strong desire to create. I am a team player who is able to work well with others and is always looking for ways to improve my skills and knowledge. I am excited to combine my love of architect and design, healthcare, and technology to create beautiful and functional web applications.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;