import { useState } from "react";
import "../App.css";
import PropTypes from "prop-types";

function SkillForm({ handleSkillClick, handleSkillDel }) {
  const [skill, setSkill] = useState("");

  const handleChange = (e) => {
    setSkill(e.target.value);
  };

  return (
    <div className="skill-form">
      <div className="formItem">
        <label htmlFor="skill">Skill</label>
        <input
          value={skill}
          onChange={handleChange}
          type="text"
          id="skill"
          name="skill"
          required
        />
      </div>
      <div className="formItem submit">
        <button onClick={(e) => handleSkillClick(e, skill)}>Add Skill</button>
      </div>
      <div className="formItem deleteSkill">
        <button onClick={handleSkillDel}>Delete Skill</button>
      </div>
    </div>
  );
}

SkillForm.propTypes = {
  handleSkillClick: PropTypes.func.isRequired,
  handleSkillDel: PropTypes.func.isRequired,
};

export default SkillForm;
