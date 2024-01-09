import "../App.css";
import PropTypes from "prop-types";

const Skill = ({ skills }) => {
  return (
    <>
      <h3 className="cvTitle">Skills</h3>
      <div className="skill">{skills.join(", ")}</div>
    </>
  );
};

Skill.propTypes = {
  skills: PropTypes.array,
};

export default Skill;
