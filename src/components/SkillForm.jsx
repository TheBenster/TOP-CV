import { useState } from "react";
import "./App.css";

function SkillForm() {
  const [skill, setSkill] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSkill("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="formItem">
        <label htmlFor="skill">Skill</label>
        <input type="text" id="skill" name="skill" required />
      </div>
      <div className="formItem">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
