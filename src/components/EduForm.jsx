// import { useState } from "react";
// import "../../src/App.css";
import "../App.css";
import propTypes from 'prop-types'

function EduForm({
  updateSchool,
  updateDegree,
  updateGradyear,
  updateEduLocation,
}) {
  return (
    <div className="edu-form">
      <form action="" id="eduForm">
        <div className="formItem">
          <label htmlFor="school">School</label>
          <input
            onChange={updateSchool}
            type="text"
            id="school"
            name="school"
            required
          />
        </div>
        <div className="formItem">
          <label htmlFor="degree">Degree</label>
          <input
            onChange={updateDegree}
            type="text"
            id="degree"
            name="degree"
            required
          />
        </div>
        <div className="formItem">
          <label htmlFor="gradyear">Graduation Year</label>
          <input
            onChange={updateGradyear}
            type="text"
            id="gradyear"
            name="gradyear"
            required
          />
        </div>
        <div className="formItem">
          <label htmlFor="eduLocation">Education Location</label>
          <input
            onChange={updateEduLocation}
            type="text"
            id="eduLocation"
            name="eduLocation"
            required
          />
        </div>
      </form>
    </div>
  );
}

EduForm.propTypes = {
  updateSchool: propTypes.func,
  updateDegree: propTypes.func,
  updateGradyear: propTypes.func,
  updateEduLocation: propTypes.func
}

export default EduForm;
