import "../App.css";
import { useState } from "react";
import PropTypes from "prop-types";

function WorkForm({ handleWorkButton, handleWorkDel }) {
  const [work, setWork] = useState({
    company: "",
    dateFrom: "",
    dateTo: "",
    position: "",
    location: "",
    responsibilities: "",
  });

  const handleWorkChange = (e) => {
    setWork({
      ...work,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleWorkButton(e, work);
    setWork({
      company: "",
      dateFrom: "",
      dateTo: "",
      position: "",
      location: "",
      responsibilities: "",
    });
  };
  return (
    <div className="work-form">
      <form onSubmit={(e) => handleSubmit(e)} action="" id="workForm">
        <div className="formItem">
          <label htmlFor="company">Company</label>
          <input
            onChange={handleWorkChange}
            // value={work.company}
            type="text"
            id="company"
            value={work.company}
            name="company"
            required
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={work.location}
            onChange={handleWorkChange}
          />
        </div>
        <div className="formItem">
          <label htmlFor="date-from">Date From</label>
          <input
            onChange={handleWorkChange}
            value={work.dateFrom}
            type="date"
            id="date-from"
            name="dateFrom"
            required
          />
          <label htmlFor="date-to">Date To</label>
          <input
            onChange={handleWorkChange}
            value={work.dateTo}
            type="date"
            name="dateTo"
            id="date-to"
          />
        </div>
        <div className="formItem">
          <label htmlFor="position">Position</label>
          <input
            onChange={handleWorkChange}
            value={work.position}
            type="text"
            id="position"
            name="position"
            required
          />
          <div className="formItem work-submit">
            <button type="submit">Add Job</button>
            <button onClick={handleWorkDel}>Delete Last Job</button>
          </div>
        </div>
        <div className="formItem work">
          <label htmlFor="responsibilities">Responsibilites</label>
          <textarea
            id="responsibilities"
            rows="5"
            required
            name="responsibilities"
            onChange={handleWorkChange}
            value={work.responsibilities}
            placeholder="Seperate responsibilities with Enter/Return"
          ></textarea>
        </div>
      </form>
    </div>
  );
}

WorkForm.propTypes = {
  handleWorkButton: PropTypes.func.isRequired,
  handleWorkDel: PropTypes.func.isRequired,
};

export default WorkForm;
