import { useState } from "react";
import "./App.css";

function HeaderForm() {
  return (
    <div>
      <form id="HeaderForm">
        <div className="formItem">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="formItem">
          <label htmlFor="niche">Niche</label>
          <input type="text" id="niche" name="niche" required />
        </div>
        <div className="formItem">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="formItem">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className="formItem">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" required />
        </div>
      </form>
    </div>
  );
}

export default HeaderForm;
