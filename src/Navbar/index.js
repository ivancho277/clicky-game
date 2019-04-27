import React from "react";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top-right">
      <a className="navbar-brand" href="#">
        Clicky Game
      </a>
      <button
        className="navbar-toggler hidden-lg-up"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />

      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
