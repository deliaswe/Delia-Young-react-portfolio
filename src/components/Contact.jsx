import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../style/Contact.css';

function Contact() {
    // create state variables for each input
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [messageSent, setMessageSent] = useState(false);

    // handle name input change
    const handleNameChange = (e) => {
        setName(e.target.value);
        setNameError(false);
    };

    // handle email input change
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError(false);
    };

    // handle message input change
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        setMessageError(false);
    };

    // email validation using regex
    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        // validate name input
        if (name.length <= 5) {
            setNameError(true);
            valid = false;
        }
        if (!validateEmail(email)) {
            setEmailError(true);
            valid = false;
        }
        if (message.length < 10) {
            setMessageError(true);
            valid = false;
        }

        // if all inputs are valid, send message
        if (valid) {
            console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
            setName('');
            setEmail('');
            setMessage('');
            setMessageSent(true);
        }
    };

// render Contact section
return (
    <section id='contact'>
        <Container>
            <Row>
                <Col lg={8} className='mx-auto'>
                    <h2 className='contact-header'>Contact Me</h2>
                    {messageSent && (
                        <div className='alert alert-success' role='alert'>
                            Your message was sent successfully!
                        </div>
                    )}
                    <Form onSubmit={handleSubmit} noValidate>
                        <Form.Group>
                            <Form.Label htmlFor='name'>Name</Form.Label>
                            <Form.Control
                                type='text'
                                className={nameError ? 'error' : ''}
                                id='name'
                                name='name'
                                value={name}
                                onChange={handleNameChange}
                                required
                            />
                            {nameError && (
                                <div className='invalid-feedback'>
                                    Please enter your name.
                                </div>
                            )}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='email'>Email</Form.Label>
                            <Form.Control
                                type='email'
                                className={emailError ? 'is-invalid' : ''}
                                id='email'
                                name='email'
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                            {emailError && (
                                <div className='invalid-feedback'>
                                    Please enter a valid email address.
                                </div>
                            )}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor='message'>Message</Form.Label>
                                <Form.Control
                                    as='textarea'
                                    className={messageError ? 'is-invalid' : ''}
                                    id='message'
                                    name='message'
                                    rows={5}
                                    value={message}
                                    onChange={handleMessageChange}
                                />
                                {messageError && (
                                    <div className='invalid-feedback'>
                                        Please enter a message.
                                    </div>
                                )}
                            </Form.Group>
                            <Button type='submit' className='custom-send-button'>
                                Send Message
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;