import { Link, NavLink } from "react-router-dom";
import React from "react";

// Homepage component
function Home() {
  return (
    <section className="home-container">
      <nav className="nav-bar">
        <Link className="nav-link" id="alumhome" to="/">
          AltAlum
        </Link>

        <ul>
          <NavLink className="nav-link" to="/Frontend">
            Frontend
          </NavLink>
          <NavLink className="nav-link" to="/Backend">
            Backend
          </NavLink>
          <NavLink className="nav-link" to="/Cloud">
            Cloud
          </NavLink>
        </ul>
      </nav>
      <body>
        <h3 className="headings">Welcome to the AltSchool Alumni Page</h3>{" "}
        <br></br>
        <h3 className="headings">We are currently enrolling</h3> <br></br>
        <div className="enroll">
          <h2>
            You can start your journey to becoming one of our Alumni by
            selecting your preferred track below!
          </h2>
        </div>
        <div>
          <Link className="enroll-link" to="/frontend">
            Frontend
          </Link>
          <Link className="enroll-link" to="/backend">
            Backend
          </Link>
          <Link className="enroll-link" to="/cloud">
            Cloud
          </Link>
        </div>
      </body>
    </section>
  );
}

export default Home;
