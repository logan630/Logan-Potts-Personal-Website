import '../css/Home.css'
// import Contact from '../components/Contact.jsx';

const Home = () => {
    return (
        <div className="homePage">
            <div className="aboutMe">
                <h1>Hi, I'm Logan.</h1>
                <h2>I'm a New Jersey-based software developer.</h2>
                <p>I graduated from Stevens Institute of Technology in May 2024 with a <span className="emphasis">Bachelors of Science in Computer Science</span> with a concentration in <span className="emphasis">Machine Learning</span>, as well as a minor in <span className="emphasis">Pure and Applied Mathematics</span>.</p>
                <p>I'm intersted in web development, and I'm especially interested in machine learning, theoretical computer science, mathematics, and the applications of mathematical theory to real-world problems in computer science. </p>
            </div>
            {/* <Contact /> */}
        </div>
    );
}

export default Home;