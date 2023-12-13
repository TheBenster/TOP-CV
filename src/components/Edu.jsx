import "../App.css";
import propTypes from "prop-types";

const Edu = ({ school, degree, gradyear, eduLocation }) => {
  return (
    <>
      <h3 className="cvTitle">Education</h3>
      <div className="edu">
        <h4 id="eduLeft">{school}</h4>
        <h4 id="eduRight">{gradyear}</h4>
        <h4 id="eduLeft">
          <span id="italic">{degree}</span>
        </h4>

        <h4 id="eduRight">
          <span id="italic">{eduLocation}</span>
        </h4>
      </div>
    </>
  );
};

Edu.propTypes = {
  school: propTypes.string,
  degree: propTypes.string,
  gradyear: propTypes.string,
  eduLocation: propTypes.string,
};

export default Edu;
