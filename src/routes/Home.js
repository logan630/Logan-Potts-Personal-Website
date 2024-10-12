import '../css/Home.css'
import github_icon from '../assets/github-mark-white.svg';
import email_icon from '../assets/email-icon.svg';

const Home = () => {
    return (
        <div className="homePage">
            {/* <div className="row"> */}
                <div className="aboutMe">
                    <h1>Hi, I'm Logan.</h1>
                    <h2>I'm a New Jersey-based software developer.</h2>
                    <p>I graduated from Stevens Institute of Technology in May 2024 with a <span className="emphasis">Bachelors of Science in Computer Science</span> with a concentration in <span className="emphasis">Machine Learning</span>, as well as a minor in <span className="emphasis">Pure and Applied Mathematics</span>.</p>
                    <p>I'm intersted in web development, and I'm especially interested in machine learning, theoretical computer science, mathematics, and the applications of mathematical theory to real-world problems in computer science. </p>
                </div>
                <div className="contact">
                    {/* <h1>My Links</h1> */}
                    <div className="icons">
                        <a href="https://github.com/logan630" target="_blank" rel="noreferrer">
                            <img src={github_icon} alt="github"></img>
                        </a>
                        <a href="mailto:logandp630@outlook.com" target="_blank" rel="noreferrer">
                            <img src={email_icon} alt="email"></img>
                        </a>
                    </div>
                </div>
            {/* </div> */}
        </div>
    );
}

export default Home;