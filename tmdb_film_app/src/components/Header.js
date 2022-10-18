import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link  to="/">İzlenecekler</Link>
          </div>
          <ul className="nav-links">
            <li>
                <Link to="/watched">İzlenenler</Link>
            </li>
            <li>
                <Link to="/add" className="btn">
                <FontAwesomeIcon icon={faPlus} />
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
