// import { useState } from "react";
import "../App.css";

function HeaderForm({
  updateName,
  updateNiche,
  updateEmail,
  updatePhone,
  updateAddress,
}) {
  return (
    <div className="header-form">
      <form id="HeaderForm">
        <div className="formItem">
          <label htmlFor="name">Full Name</label>
          <input
            onChange={updateName}
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="formItem">
          <label htmlFor="niche">Niche</label>
          <input
            onChange={updateNiche}
            type="text"
            id="niche"
            name="niche"
            required
          />
        </div>
        <div className="formItem">
          <label htmlFor="email">Email</label>
          <input
            onChange={updateEmail}
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="formItem">
          <label htmlFor="phone">Phone</label>
          <input
            onChange={updatePhone}
            type="tel"
            id="phone"
            name="phone"
            required
          />
        </div>
        <div className="formItem addy">
          <label htmlFor="address">Address</label>
          <input
            onChange={updateAddress}
            type="text"
            id="address"
            name="address"
            required
          />
        </div>
        <div className="formItem submit">
          <button id="headSub" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default HeaderForm;
