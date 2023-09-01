import {Container, Row, Col, Button} from 'react-bootstrap';
import '../style/Resume.css';
import PDF from '../assets/DeliaYoungResume.pdf';

// resume component
function Resume() {
    return (
        <section id='resune' className='resume-margin'>
            <Container className='reume-section'>
                <Row>
                    <Col className='text-center'>
                        <h1>Resume</h1>
                        <hr className='star-primary'/>
                        <Button variant='dark' href={PDF} download>
                            Download Resume
                        </Button>
                    </Col>
                    </Row>
                    <Row>
                        <Col>
                        <h3>Summary</h3>
                            <hr className='star-primary'/>
                            <p>
                            Versatile software developer driven by a blend of medical expertise and interior architecture background, coupled with a fervor for web development. Demonstrated proficiency in both independent and collaborative work, adept at meeting tight deadlines even amidst high-pressure scenarios. Eagerly pursuing a Software Developer position to leverage my diverse skills and make a meaningful contribution within a dynamic team environment.
                            </p>
                            </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h3>Technical Skills</h3>
                                    <hr className='star-primary'/>
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
                                            <strong>Tools:</strong> Git, GitHub, Heroku, Insomnia, VS Code, Adobe Creative Suite, AutoCAD, Microsoft Office Suite
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h3>Projects</h3>
                                    <hr className='star-primary'/>
                                    <div className='resume-item'>
                                        <h4>Project 1</h4>
                                        MVC Technology Blog                                                                     https://github.com/deliaswe/MVC-Technology-Blog
- Created a car blog that channeled my passion for automobiles into a dynamic project.
- Implemented the website using Handlebars.js, Node, and Express.js, while leveraging the power of JavaScript. 
- The platform functionality is a robust backend foundation utilizing MySQL and Sequelize.
- Providing users with a seamless and engaging interface.
                                    </div>
                                    <div className='resume-item'>
                                        <h4>Project 2</h4>
                                        SQL Employee Tracker

                                        https://github.com/deliaswe/sql-employee-tracker
- Developed a command-line application that navigates the complexities of employees, roles, and departments.
- The project reflects my ability to conceptualize, design, and implement user-friendly solutions that optimize management processes. 
- The application is powered by Node.js, Inquirer, and MySQL.
                                    </div>
                                    <div className='resume-item'>
                                        <h4>Project 3</h4>
                                        Note Taker App

                                        https://github.com/deliaswe/note-taker
- The application allows users to create and save notes to keep track of tasks they need to complete. 
- It uses Express.js backend to save and retrieve note data from a JSON file.
                                    </div>
                                    <div className='resume-item'>
                                        <h4>Project 4</h4>
                                        MealFlick

                                        https://github.com/deliaswe/meal-flick
- Collaborated with two developers to build a web application, using JavaScript, API, and jQuery. 
- Utilized server-side third-party APIs (The Movie Database and TheMealDB) to dynamically generate movie and meal recommendations based on the users mood.
- Integrated the option for users to save movie and meal combinations using Local Storage.
                                    </div>
                                    </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                    <h3>Experience</h3>
                                    <hr className='star-secondary'/>
                                    <div className='resume-item'>
                                    <h4>Atlantic Health Systems, Clinical Lab Assistant I</h4>
                                    <h5>Morriston, NJ, Nov 2022 - Present</h5>
                                    <p>
                                    write a description here
                                    </p>
                                    </div>
                                    <div className='resume-item'>
                                    <h4>UT Southwestern Medical Center, Clinical Research Assistant II</h4>
                                    <h5>Dallas, TX, May 2022 - Oct 2022</h5>
                                    <p>
                                    write a description here
                                    </p>
                                    </div>
                                    <div className='resume-item'>
                                    <h4>Atlantic Health Systems, Clinical Lab Assistant I</h4>
                                    <h5>Morriston, NJ, May 2015 - Mar 2022</h5>
                                    <p>
                                    write a description here
                                    </p>
                                    </div>
                                    <div className='resume-item'>
                                    <h4>Virtua Heatlh, Phlebotomist</h4>
                                    <h5>Mt Holly, NJ, Apr 2012 - Aug 2015</h5>
                                    <p>
                                    write a description here
                                    </p>
                                    </div>
                                    <h3>Education</h3>
                                    <hr className='star-secondary'/>
                                    <div className='resume-item'>
                                    <h4>Columbia University, Full Stack Web Development Certificate</h4>
                                    <h5>New York, NY, 2023</h5>
                                    <p>
                                    write a description here
                                    </p>
                                    </div>
                                    <div className='resume-item'>
                                    <h4>New York School of Interior Design, Interior Architecture</h4>
                                    <h5>New York, NY, 2019 - 2021</h5>
                                    <p>
                                    write a description here
                                    </p>
                                    </div>
                                    </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        </Col>
                                        </Row>
                                        </Container>
                                        </section>
                                        );
                                    }

                                    // export Resume component
                                    export default Resume;
