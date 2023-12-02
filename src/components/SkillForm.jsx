// import { useState } from "react";
import "../App.css";

function SkillForm() {
  //   const [skill, setSkill] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // setSkill("");
  //   };

  return (
    <div className="skill-form">
      <div className="formItem">
        <label htmlFor="skill">Skill</label>
        <input type="text" id="skill" name="skill" required />
      </div>
      <div className="formItem submit">
        <button>Add Skill</button>
      </div>
      <div className="formItem submit">
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default SkillForm;
