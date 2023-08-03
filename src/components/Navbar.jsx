import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="logo" onClick={() => navigate("/")}>
        PPA
      </div>
      <ul className="nav-links">
        <li onClick={() => navigate("/catalog")}>catalog</li>
        <li onClick={() => navigate("/contact")}>contact us</li>
      </ul>
    </nav>
  );
}

export default Navbar;
