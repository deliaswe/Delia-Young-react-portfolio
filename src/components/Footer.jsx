import '../style/Footer.css';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';
import Twitterx from '../assets/images/Twitterx.jpg';
import email from '../assets/images/email.jpeg';

function Footer() {
    return (
        <footer>
        <div className="footerContainer">
            <div className="icons">
            <a href="https://github.com/deliaswe" target="blank">
            <img src={github} alt="GitHub" className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/delia-young-662801100/" target="blank">
            <img src={linkedin} alt="LinkedIn" className="icon" />
            </a>
            <a href="https://twitter.com/Delia_marlena_" target="blank">
            <img src={Twitterx} alt="Twitterx" className="icon" />
            </a>
            <a href="mailto:deliamy1014@gmail.com" target="blank">
            <img src={email} alt="email" className="icon" />
            </a>
            </div>
            <section className='form-container'>
            </section>
                <section className='form-footer'>
                    <h5 className='designer-text'>Designed by 👩🏾‍🎨 Delia Young</h5>
                        <h6 className='copyright-text'>&copy; {new Date().getFullYear()} All rights reserved.</h6>
                </section>
                </div>
        </footer>
    );
}

export default Footer;