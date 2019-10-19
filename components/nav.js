import React from 'react';

const HeadNav = () => (
  <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">
        HOME
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          ORDERS
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            ORDERS
          </a>
          <hr className="navbar-divider"/>
          <a className="navbar-item">
            PRE-ORDERS
          </a>
        </div>
      </div>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          PRODUCTS
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            STOCK
          </a>
          <hr className="navbar-divider"></hr>
          <a className="navbar-item">
            OUT-OF-STOCK
          </a>
        </div>
      </div>

      <a className="navbar-item">
        CUSTOMERS
      </a>
      <a className="navbar-item ">
        EMPLOYEES
      </a>
    </div>

    <div className="navbar-end ">
      <div className="navbar-item ">
        <div className="user ">
          <a>User: Lorem </a>
        </div>

        <div className="buttons">
          <a className="button is-danger is-rounded">
            Logout
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
)

export default HeadNav ;