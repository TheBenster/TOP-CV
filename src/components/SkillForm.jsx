import { useState } from "react";
import "../App.css";

function SkillForm({ handleSkillClick }) {
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
    </div>
  );
}

export default SkillForm;
