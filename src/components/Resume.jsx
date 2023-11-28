import { Container, Row, Col } from 'react-bootstrap';
import '../style/Resume.css';

function Resume() {
    return (
    <section id='resume'>
        <p>View my resume here</p>
        <a
        href='https://drive.google.com/file/d/1JoU6FXMc32LxewdHJZLcSc0HEgpb7m8U/view?usp=sharing'
        target='_blank'
        rel='noreferrer'
        >
        <button>Download Resume</button>
        </a>

        <section id='resume' className='resume-margin'>
        <Container className='resume-section'>
            <Row>
            <Col className='text-center'>
                <h1>Resume</h1>
                <hr className='star-primary' />
            </Col>
            </Row>
            <Row>
            <Col>
                <h3>Summary</h3>
                <hr className='star-primary' />
                <p>
                Versatile software developer driven by a blend of medical expertise and interior architecture background, coupled with a fervor for web development. Demonstrated proficiency in both independent and collaborative work, adept at meeting tight deadlines even amidst high-pressure scenarios. Eagerly pursuing a Software Developer position to leverage my diverse skills and make a meaningful contribution within a dynamic team environment.
                </p>
            </Col>
            </Row>
            <Row>
            <Col>
                <h3>Technical Skills</h3>
                <hr className='star-primary' />
                <ul className='list-inline-item'>
                <li className='list-inline-item'>
                    <strong>Languages:</strong> JavaScript, HTML, CSS, SQL, NoSQL, GraphQL
                </li>
                <li className='list-inline-item'>
                    <strong>Libraries/Frameworks:</strong> React, Express, Node.js, jQuery, Bootstrap, Handlebars, Mongoose, Sequelize, Material UI
                </li>
                <li className='list-inline-item'>
                    <strong>Databases:</strong> MySQL, MongoDB
                </li>
                <li className='list-inline-item'>
                    <strong>Tools:</strong> Git, GitHub, Heroku, Insomnia, VS Code, Netlify, Adobe Creative Suite, AutoCAD, Microsoft Office Suite
                </li>
                </ul>
            </Col>
            </Row>
            <Row>
            <Col>
                <h3>Projects</h3>
                <hr className='star-primary' />
                <div className='resume-item'>
                <h4>Project 1</h4>
                <p>Project 1 See downloaded resume</p>
                </div>
                <div className='resume-item'>
                <h4>Project 2</h4>
                <p>Project 2 See downloaded resume</p>
                </div>
                <div className='resume-item'>
                <h4>Project 3</h4>
                <p>Project 3 See downloaded resume</p>
                </div>
                <div className='resume-item'>
                <h4>Project 4</h4>
                <p>Project 4 See downloaded resume</p>
                </div>
            </Col>
            </Row>
            <Row>
            <Col>
                <h3>Experience</h3>
                <hr className='star-secondary' />
                <div className='resume-item'>
                <h4>Atlantic Health System, Clinical Lab Assistant I</h4>
                <h5>Morristown, NJ, Nov 2022 - Present</h5>
                <p>See downloaded resume</p>
                </div>
                <div className='resume-item'>
                <h4>UT Southwestern Medical Center, Clinical Research Assistant II</h4>
                <h5>Dallas, TX, May 2022 - Oct 2022</h5>
                <p>See downloaded resume</p>
                </div>
                <div className='resume-item'>
                <h4>Atlantic Health System, Clinical Lab Assistant I</h4>
                <h5>Morristown, NJ, May 2015 - Mar 2022</h5>
                <p>See downloaded resume</p>
                </div>
                <div className='resume-item'>
                <h4>Englewood Hospital, Phlebotomist</h4>
                <h5>Englewood, NJ, Mar 2013 - Apr 2017</h5>
                <p>See downloaded resume</p>
                </div>
            </Col>
            </Row>
            <Row>
            <Col>
                <h3>Education</h3>
                <hr className='star-secondary' />
                <div className='resume-item'>
                <h4>Columbia University, Full Stack Web Development</h4>
                <h5>New York, NY, Mar 2023 - Sept 2023</h5>
                <p>Certificate</p>
                </div>
                <div className='resume-item'>
                <h4>New York School of Interior Design, Interior Architecture</h4>
                <h5>New York, NY, 2019 - 2021</h5>
                <p>Certificate</p>
            </div>
            </Col>
        </Row>
        </Container>
    </section>
    </section>
);
}

export default Resume;
