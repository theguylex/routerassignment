import { Link } from "react-router-dom";
import FetchRandomUser from "./FetchRandomUser";

// Backend component
function Backend() {
  return (
    <section className="about-container">
      <nav className="nav-bar">
        <Link className="nav-link" id="alumhome" to="/">
          AltAlum
        </Link>
        <ul>
          <Link className="nav-link" to="/Frontend">
            Frontend
          </Link>
          <Link className="nav-link" to="/Backend">
            Backend
          </Link>
          <Link className="nav-link" to="/Cloud">
            Cloud
          </Link>
        </ul>
      </nav>

      <h1>Backend Engineers</h1>

      <div>
        <FetchRandomUser />
      </div>
    </section>
  );
}

export default Backend;
