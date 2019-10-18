import React from 'react';

const HeadNav = () => (
  <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        HOME
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          ORDERS
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            ORDERS
          </a>
          <hr class="navbar-divider"/>
          <a class="navbar-item">
            PRE-ORDERS
          </a>
        </div>
      </div>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          PRODUCTS
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            STOCK
          </a>
          <hr class="navbar-divider"></hr>
          <a class="navbar-item">
            OUT-OF-STOCK
          </a>
        </div>
      </div>

      <a class="navbar-item">
        CUSTOMERS
      </a>
      <a class="navbar-item ">
        EMPLOYEES
      </a>
    </div>

    <div class="navbar-end ">
      <div class="navbar-item ">
        <div className="user ">
          <a>User: Lorem </a>
        </div>

        <div class="buttons">
          <a class="button is-danger is-rounded">
            Logout
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
)

export default HeadNav ;