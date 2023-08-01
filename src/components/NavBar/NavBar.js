import CartWidget from "../CartWidget/CartWidget";
import MaapIcon from "./assets/favicon.ico";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="img-thumbnail mx-3" src={MaapIcon} alt="" />
          MAAP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                New Season
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Man
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Woman
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Accessories
              </a>
            </li>
            <li>
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
