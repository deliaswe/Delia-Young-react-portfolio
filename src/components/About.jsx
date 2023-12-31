import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import headshot from '../assets/images/headshot.jpg';
import columbiacert from '../assets/images/columbiacert.png';
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
                        <Image src={headshot} rounded fluid className='about-image' />
                    </Col>
                    <Col xs={12} md={8}>
                        <Card>
                            <Card.Body>
                                <Card.Title className='text-center mb-4'>
                                    About Delia Young 
                                </Card.Title>
                                <Card.Text>
                                Meet Delia Young (New Jersey)—an enthusiastic and innovative software developer with a unique blend of experience in healthcare and interior architecture. Freshly minted from the Columbia Engineering Full Stack Web Development Bootcamp, I bring an unwavering drive and meticulousness to everything I undertake. My insatiable curiosity fuels both my love for learning and my ardent creative spirit.
                            </Card.Text>
                            <Card.Text>
                                A collaborative team player by nature, I thrive in group settings, constantly seeking ways to refine my skills and expand my knowledge horizons. My journey has equipped me with a distinctive perspective, one that seamlessly fuses my passions: the artistry of architecture and design, the critical realm of healthcare, and the ever-evolving landscape of technology. This fusion drives me to craft web applications that effortlessly marry elegance with functionality. I am excited to bring my unique skill set to a team that values creativity, collaboration, and innovation.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={8} className='mx-auto mt-4'>
                        <Card>
                            <Card.Body>
                                <Card.Title className='text-center mb-4'>
                                    Certification
                                </Card.Title>
                                <Card.Text>
                                    <h5>Columbia Engineering</h5>
                                    <p>Full Stack Web Development Certificate</p>
                                    <Image src={columbiacert} rounded fluid className='about-image' />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={8}>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;
