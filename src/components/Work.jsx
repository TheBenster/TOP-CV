import "../App.css";
import propTypes from "prop-types";

const Work = ({ jobExperience, formatDate }) => {
  return (
    <>
      <h3 className="cvTitle">Work Experience</h3>
      {Array.isArray(jobExperience) &&
        jobExperience.map((job, index) => (
          <div key={index} className="work">
            <h4 id="workLeft">{job.position}</h4>
            <h4 id="workRight">
              {formatDate(job.dateFrom)} - {formatDate(job.dateTo)}
            </h4>
            <h4 id="workLeft">{job.company}</h4>
            <h4 id="workRight">{job.location}</h4>
            <ul id="responsibilities">
              {Array.isArray(job.responsibilities) &&
              // if job.responsbilities is an array with a length of 1, which it autoamtically is,
              // and it includes a new line, which hopefully it does,
              // take the first object of that array and split it at the new line. JEEZ WHY?
              job.responsibilities.length === 1 &&
              job.responsibilities[0].includes("\n")
                ? job.responsibilities[0]
                    .split("\n")
                    .map((responsibility, respIndex) => (
                      <li key={respIndex}>{responsibility}</li>
                    ))
                : job.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex}>{responsibility}</li>
                  ))}
            </ul>
          </div>
        ))}
    </>
  );
};

Work.propTypes = {
  jobExperience: propTypes.array,
  formatDate: propTypes.func,
};

export default Work;
