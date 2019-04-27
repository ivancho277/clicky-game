import React from "react";

const Navbar = props => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top-right">
      <a class="navbar-brand" href="#">
        Clicky Game
      </a>
      <button
        class="navbar-toggler hidden-lg-up"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />

      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            Home <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Link
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
