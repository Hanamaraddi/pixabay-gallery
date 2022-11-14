import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Pixabay-logo-new.svg/1200px-Pixabay-logo-new.svg.png"
              alt=""
              width="40"
              height="40"
            />
          </a>
          <form className="d-flex">
            {/* <button className="btn btn-outline-success" type="submit">
              Login
            </button>{" "}
            &nbsp;
            <button className="btn btn-outline-success" type="submit">
              Register
            </button> */}
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
