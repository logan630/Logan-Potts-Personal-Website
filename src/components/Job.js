import '../css/Job.css';

const Job = ({ 
  // Information to be displayed 
  // Preview shows when activity[index] is false (see below for more)
  // Employer, ..., bullets show when activity[index] is true
  preview, 
  employer, 
  title, 
  loc, 
  date, 
  bullets,

  // These props are state inherited from the parent of this component
  // This job component is one of many stored within a parent container 
  // activity is an array determining the activity of all jobs
  // index is the position in the activity array corresponding to this job
  activity,
  setActivity,
  index
}) => {

  // On click, toggle state
  const handleClick = () => {
    let tempArray = activity.slice();
    tempArray[index] = !activity[index];
    setActivity(tempArray);
  };

  // Render all information only if job is active
  // Otherwise, render only the preview
  return activity[index] ? (
    <div className="jobContainer">
      <div className="headingContainer">
        <div className="headingBlock">
          <h1 className="employer" onClick={handleClick}>{employer}</h1>
          <h2 className="title">{title}</h2>
        </div>
        <div className="headingBlock">
          <p className="location">{loc}</p>
          <p className="date">{date}</p>
        </div>
      </div>
      <div className="listContainer">
        <ul>
        {
          bullets.map((text) => 
            <li className="listElement">{text}</li>
          )
        }
        </ul>
      </div>
    </div>
  ) : (
    <p className="preview">- <span className="previewText" onClick={handleClick}>{preview}</span></p>
  );
}

export default Job;
