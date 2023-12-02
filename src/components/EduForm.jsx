// import { useState } from "react";
// import "../../src/App.css";
import "../App.css";

function EduForm() {
  return (
    <div className="edu-form">
      <form action="" id="eduForm">
        <div className="formItem">
          <label htmlFor="school">School</label>
          <input type="text" id="school" name="school" required />
        </div>
        <div className="formItem">
          <label htmlFor="degree">Degree</label>
          <input type="text" id="degree" name="degree" required />
        </div>
        <div className="formItem">
          <label htmlFor="gradyear">Graduation Year</label>
          <input type="text" id="gradyear" name="gradyear" required />
        </div>
      </form>
    </div>
  );
}

export default EduForm;
