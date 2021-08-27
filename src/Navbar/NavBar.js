import React from "react";

// Stateless Functional Components
// Shortcut = sfc
const Navbar = ({ totalCounters }) => {
  return (
    <React.Fragment>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container">
          <span class="navbar-brand mb-0 h1">
            Navbar
            <span className="badge bg-pill bg-secondary ms-1">{totalCounters}</span>
          </span>
          <h3>
            It is <span className="badge bg-secondary">{new Date().toLocaleDateString()}</span>
          </h3>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
