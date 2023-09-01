// import { faGithub, faLinkedin, faTwitter } from 'react-icons/fa';
import '../style/Footer.css';

// array of social media links
const socialMedia = [
    {
        name: 'Github',
        link: 'https://github.com/deliaswe',
       // icon: faGithub,
        color: '#211F1F',
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/delia-young-662801100/',
       // icon: faLinkedin,
        color: '#0A66C2',
    },
    {
        name: 'Twitter X',
        link: 'https://twitter.com/Delia_marlena_',
        //icon: faTwitter,
        color: '#1DA1F2',
    },
];

// define Footer component
const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <section className='social-media-icons-wrapper d-flex justify-content-center'>
                    {socialMedia.map(({ name, link }) => (
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
                                {/* {icon({ size: '2x', color: color })} */}
                            </a>
                            <a href={link} target='_blank' rel='noreferrer'>
                                <span className='d-inline-block text'>{name}</span>
                            </a>
                        </div>
                    ))}
                </section>
                <section className='form-footer'>
                    <h5 className='designer-text'>Designed by 👩🏾‍🎨 Delia Young</h5>
                        <h6 className='copyright-text'>&copy; {new Date().getFullYear()} All rights reserved.</h6>
                </section>
            </div>
        </footer>
    );
};

// export Footer component
export default Footer;
