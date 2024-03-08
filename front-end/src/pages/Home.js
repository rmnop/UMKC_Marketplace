import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-transparent">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">UMKC Marketplace</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Market
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Featured</a>
                </li>
              </ul>
              <a className="btn btn-default border-white rounded-pill" href="">Sign Up</a>
              <a className="btn btn-default border-white rounded-pill" href="">Log In</a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div>
          <button id="prevButton" className="wave"><i className="fa-solid fa-chevron-left"></i></button>
          <button id="nextButton" className="wave"><i className="fa-solid fa-chevron-right"></i></button>
        </div>

        <div className="text">
          <h1 className="h1">Buy</h1>
          <div className="change-image"></div>
        </div>

        <div className="section-container-main">
          {/* Your section contents go here */}
        </div>

        <section className="about-section">
          {/* Your about section contents go here */}
        </section>

        <section className="services-section">
          {/* Your services section contents go here */}
        </section>
      </main>

      {/* Optional: Bootstrap JS */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      {/* Your custom JavaScript file */}
      <script src="main.js"></script>
    </div>
  );
}

export default Home;
