// import { useState } from "react";
import "../App.css";

function Header({ name, niche, email, phone, address }) {
  return (
    <div className="header">
      <div className="topPart">
        <h2>{name}</h2>
        <h2>{niche}</h2>
      </div>
      <div className="bottomPart">
        <h3>{email}</h3>
        <h3>{phone}</h3>
        <h3>{address}</h3>
      </div>
    </div>
  );
}

export default Header;
