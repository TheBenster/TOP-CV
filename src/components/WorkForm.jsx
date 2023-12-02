import "../App.css";

function WorkForm() {
  return (
    <div className="work-form">
      <form action="" id="workForm">
        <div className="formItem">
          <label htmlFor="company">Company</label>
          <input type="text" id="company" name="company" required />
        </div>
        <div className="formItem">
          <label htmlFor="date-from">Date From</label>
          <input type="date" id="date-from" name="date-from" required />
          <label htmlFor="date-to">Date To</label>
          <input type="date" id="date-to" name="date-to" />
        </div>
        <div className="formItem">
          <label htmlFor="position">Position</label>
          <input type="text" id="position" name="position" required />
        </div>
        <div className="formItem work">
          <label htmlFor="responsibilities">Responsibilites</label>
          <textarea
            id="responsibilities"
            name="responsibilities"
            rows="5"
            required
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default WorkForm;
