import "../App.css";
import { useState, useEffect } from "react";

function WorkForm({ handleWorkButton }) {
  const [work, setWork] = useState({
    company: "",
    dateFrom: "",
    dateTo: "",
    position: "",
    location: "",
    responsibilities: "",
  });

  const handleJobDelete = (index) => {
    setWork({
      ...work,
      responsibilities: work.responsibilities.filter((_, i) => i !== index),
    });
  };

  const handleWorkChange = (e) => {
    setWork({
      ...work,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleWorkButton(e, work); // Pass the entire work object
    setWork({
      // Reset form fields
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
      <form onSubmit={handleSubmit} action="" id="workForm">
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
            <button type="submit">Add Work</button>
            <button
              onClick={() => handleJobDelete(work.responsibilities.length - 1)}
            >
              Delete Last Job
            </button>
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

export default WorkForm;
