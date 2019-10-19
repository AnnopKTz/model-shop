import React from 'react';

const Menu = () => (
    <aside className="menu">
        <p className="menu-label">
            CARS
  </p>
        <ul className="menu-list">
            <div className="dropdown">
                <div className="dropdown-trigger">
                    <button className="button " aria-haspopup="true" aria-controls="dropdown-menu3">
                        <span>Classic-Cars</span>
                        <span className="icon">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>

                <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                    <div className="dropdown-content">

                        <a href="#" className="dropdown-item">
                            Layout
      </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            More
      </a>
                    </div>
                </div>
            </div>

            <div className="dropdown">
                <div className="dropdown-trigger">
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                        <span>Vintage-Cars</span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>

                <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                    <div className="dropdown-content">
                        <a href="#" className="dropdown-item">
                            Layout
      </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            More
      </a>
                    </div>
                </div>
            </div>

            <div className="dropdown">
                <div className="dropdown-trigger">
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                        <span>Motocycles</span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>

                <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                    <div className="dropdown-content">

                        <a href="#" className="dropdown-item">
                            Layout
      </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            More
      </a>
                    </div>
                </div>
            </div>

            <div className="dropdown">
                <div className="dropdown-trigger">
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                        <span>Trucks & Buses</span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>

                <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                    <div className="dropdown-content">
                        <a href="#" className="dropdown-item">
                            Layout
      </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            More
      </a>
                    </div>
                </div>
            </div>

        </ul>
        <p className="menu-label">
            Trains
  </p>
        <ul className="menu-list">
            <div className="dropdown">
                <div className="dropdown-trigger">
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                        <span>Trains</span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>

                <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                    <div className="dropdown-content">

                        <a href="#" className="dropdown-item">
                            Layout
      </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            More
      </a>
                    </div>
                </div>
            </div>

        </ul>
        <p className="menu-label">
            Planes
  </p>
        <ul className="menu-list">
            <div className="dropdown">
                <div className="dropdown-trigger">
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                        <span>Planes</span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>

                <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                    <div className="dropdown-content">

                        <a href="#" className="dropdown-item">
                            Layout
      </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            More
      </a>
                    </div>
                </div>
            </div>

        </ul>
        <p className="menu-label">
            Ships
  </p>
        <ul className="menu-list">
            <div className="dropdown">
                <div className="dropdown-trigger">
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                        <span>Ships</span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>

                <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                    <div className="dropdown-content">

                        <a href="#" className="dropdown-item">
                            Layout
      </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            More
      </a>
                    </div>
                </div>
            </div>

        </ul>
    </aside>
)

export default Menu;