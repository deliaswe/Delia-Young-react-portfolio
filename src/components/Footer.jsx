import React from 'react';
import { FontAwesonIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../style/Footer.css';

// array of social media links
const socialMedia = [
    {
        name: 'Github',
        link: 'https://github.com/deliaswe',
        icon: faGithub,
        color: '#211F1F',
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/delia-young-662801100/',
        icon: faLinkedin,
        color: '#0A66C2',
    },
    {
        name: 'Twitter X',
        link: 'https://twitter.com/Delia_marlena',
        icon: faTwitter,
        color: '#1DA1F2',
    },
];

// define Footer component
const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <section className='social-media-icons-wrapper d-flex justify-content-center'>
                    {socialMedia.map(({ name, link, icon, color }) => (
                        <div
                        key={name}
                        className='d-flex flex-column align-items-center mx-md-2 transparent-bg'
                        >
                            <a
                            href={link}
                            className={`icon ${name}`}
                        target='_blank'
                    rel='noreferrer'
                    >
                    <FontAwesomeIcon 
                    icon={icon}
                    bounce
                    classNmae='footer-icon-size'
                    style={{ color: color }}
                    />
                    </a>
                    <a href={link} target='_blank' rel='noreferrer'>
                        <span className='d-inline-block text'>{name}</span>
                    </a>
                    </div>
                    ))}
                </section>
                <section className='form-footer'>
                    <h5 className='designer-text'>Designed by Delia Young</h5>
                    <p>
                        <h6 className='copyright-text'>&copy; {new Date().getFullYear()} All rights reserved.</h6>
                    </p>
                </section>
            </div>
        </footer>
    );
};

// export Footer component
export default Footer;