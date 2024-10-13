import Job from '../components/Job.js';
import { useState } from 'react';
import '../css/Work.css';

const Work = () => {

    const numJobs = 6;
    const [activity, setActivity] = useState(Array(numJobs).fill(false));

    // Turn every panel on if at least one is off,
    // Otherwise, turn all panels off
    const handleClick = () => {
      setActivity(Array(numJobs).fill(!activity.reduce((x,y) => x && y, true)));
    };

    return (
      <div className="workContainer">
        <h1 className="workTitle">Work Experience</h1>
        <p className="workInfo">Click on any of the jobs for more information, or click <span className="clickable" onClick={handleClick}>here</span> to toggle the entire list on/off.</p>
        
        {/* Job 6 */}
        <Job
          preview="Private Tutor"
          employer="Self-employed"
          title="Tutor"
          loc="Toms River, NJ and Hoboken, NJ"
          date="Aug 2020 - Present"
          bullets={[
            "Provided assistance for students in several courses, including introduction to programming, data structures, algoriths, discrete structures, differential calculus, and differential equations.",
            "Coordinated meetings with a dozen students for weekly one-hour sessions.",
            "Wrote and distributed practice material in each subject to all students."
          ]}
          activity={activity}
          setActivity={setActivity}
          index={5}
        />

        {/* Job 5 */}
        <Job
          preview="Discrete Structures Course Assistant"
          employer="Stevens Institute of Technology"
          title="Discrete Structures Course Assistant"
          loc="Hoboken, NJ"
          date="Jan - May 2023 ; Jan - May 2024"
          bullets={[
            "Aided students in classwork pertaining to propositional logic, set theory, number theory, cryptography, and graph theory.",
            "Helped students directly with proofs and exercises in weekly two-hour office hours sessions.",
            "Taught weekly two-and-a-half hour lab sessions for a class of thirty students consisting of course material reviews and programming assignments.",
            "Hosted three-hour exam review session twice a semester for all students across all sections of the course.",
            "Gave lectures to two classes of fifty students two times a semester on propositional logic and number theory."
          ]}
          activity={activity}
          setActivity={setActivity}
          index={4}
        />

        {/* Job 4 */}
        <Job
          preview="Theory of Computation Course Assistant"
          employer="Stevens Institute of Technology"
          title="Theory of Computation Course Assistant"
          loc="Hoboken, NJ"
          date="Aug - Dec 2023"
          bullets={[
            "Aided students in classwork pertaining to finite automata, regular languages, context-free languages, Turing machines, and complexity theory.",
            "Helped students directly with proofs and exercises in weekly two-hour office hours sessions.",
            "Hosted three-hour exam review session twice a semester for all students across all sections of the course.",
            "Wrote and distributed exam review material to students twice a semester, including a two-hundred slide slideshow."
          ]}
          activity={activity}
          setActivity={setActivity}
          index={3}
        />

        {/* Job 3 */}
        <Job
          preview="Computer Architecture Course Assistant"
          employer="Stevens Institute of Technology"
          title="Computer Architecture Course Assistant"
          loc="Hoboken, NJ"
          date="Aug - Dec 2022"
          bullets={[
            "Aided students in classwork pertaining to ARMv8 assembly programming and computer architecture.",
            "Helped students directly with writing and debugging code in weekly two-hour office hour sessions.",
            "Taught weekly two-and-a-half hour lab sessions for a class of twenty students consisting of assembly programming lessons and assignments."
          ]}
          activity={activity}
          setActivity={setActivity}
          index={2}
        />

        {/* Job 2 */}
        <Job
          preview="Stevens Academic Support Center Tutor"
          employer="Stevens Institute of Technology"
          title="Academic Support Center Tutor"
          loc="Hoboken, NJ"
          date="Aug 2021 - May 2022"
          bullets={[
            "Provided assistance for students in several courses, including introduction to programming, data structures, algorithms, discrete structures, probability and statistics, and linear algebra.",
            "Coordinated meetings with a dozen students for weekly one-hour sessions.",
            "Wrote and distributed practice material in each subject to all students."
          ]}
          activity={activity}
          setActivity={setActivity}
          index={1}
        />

        {/* Job 1 */}
        <Job
          preview="DCinbox Data Visualization Lead"
          employer="Stevens Institute of Technology"
          title="Research Assistant, DCinbox Data Visualization Lead"
          loc="Hoboken, NJ"
          date="May - Aug 2021"
          bullets={[
            "Oversaw the implementation of data visualizations, including histographs, line graphs, pie charts, and maps of the US on the DCinbox website using d3.js.",
            "Implemented a custom map visualization tool for use on DCinbox, written in pure javascript.",
            "Worked with other team members in designing and styling the front end layout of the website, including the search engine homepage."
          ]}
          activity={activity}
          setActivity={setActivity}
          index={0}
        />
      </div>
    )
};

export default Work;
