import "../App.css";
import PropTypes from "prop-types";

const Work = ({ work }) => {
  return (
    <>
      <h3 className="cvTitle">Work Experience</h3>
      <div className="work">
        <h4 id="workLeft">{work.position}</h4>
        <h4 id="workRight">
          {work.dateFrom} - {work.dateTo}
        </h4>
        <h4 id="workLeft">{work.company}</h4>

        <h4 id="workRight">{work.location}</h4>
        <h4 id="responsibilities">
          {" "}
          {work.responsibilities.map((responsibility, i) => (
            <li key={i}>{responsibility}</li>
          ))}
        </h4>
      </div>
    </>
  );
};

Work.propTypes = {
  work: PropTypes.shape({
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    dateFrom: PropTypes.string.isRequired,
    dateTo: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    responsibilities: PropTypes.string.isRequired,
  }),
};
export default Work;
