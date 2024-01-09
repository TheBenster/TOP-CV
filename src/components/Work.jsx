import "../App.css";

const Work = ({ jobExperience }) => {
  return (
    <>
      <h3 className="cvTitle">Work Experience</h3>
      {Array.isArray(jobExperience) &&
        jobExperience.map((job, index) => (
          <div key={index} className="work">
            <h4 id="workLeft">{job.position}</h4>
            <h4 id="workRight">
              {job.dateFrom} - {job.dateTo}
            </h4>
            <h4 id="workLeft">{job.company}</h4>
            <h4 id="workRight">{job.location}</h4>
            <ul id="responsibilities">
              {Array.isArray(job.responsibilities) &&
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

export default Work;
