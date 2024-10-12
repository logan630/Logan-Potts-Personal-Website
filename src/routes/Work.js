import Job from '../components/Job.js';
import { useState } from 'react';
import '../css/Work.css';

const Work = () => {

    const numJobs = 2;
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
        
        {/* Job 2 */}
        <Job
          preview="Computer Architecture Course Assistant"
          employer="Stevens Institute of Technology"
          title="Computer Architecture Course Assistant"
          loc="Hoboken, NJ"
          date="Aug 2022 - Dec 2022"
          bullets={[
            "Aided students in classwork pertaining to ARMv8 assembly programming and computer architecture.",
            "Taught weekly two-hour lab sessions for a class of twenty students consisting of assembly programming lessons and assignments."
          ]}
          activity={activity}
          setActivity={setActivity}
          index={1}
        />

        {/* Job 1 */}
        <Job
          preview="Computer Architecture Course Assistant"
          employer="Stevens Institute of Technology"
          title="Computer Architecture Course Assistant"
          loc="Hoboken, NJ"
          date="Aug 2022 - Dec 2022"
          bullets={[
            "Aided students in classwork pertaining to ARMv8 assembly programming and computer architecture.",
            "Taught weekly two-hour lab sessions for a class of twenty students consisting of assembly programming lessons and assignments."
          ]}
          activity={activity}
          setActivity={setActivity}
          index={0}
        />
      </div>
    )
};

export default Work;
