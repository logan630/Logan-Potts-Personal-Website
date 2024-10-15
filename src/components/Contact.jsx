import github_icon from '../assets/github-mark-white.svg';
import email_icon from '../assets/email-icon.svg';
import '../css/Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="icons">
                <a href="https://github.com/logan630" target="_blank" rel="noreferrer">
                    <img src={github_icon} alt="github"></img>
                </a>
                <a href="mailto:logandp630@outlook.com" target="_blank" rel="noreferrer">
                    <img src={email_icon} alt="email"></img>
                </a>
            </div>
        </div>
    );
};

export default Contact;