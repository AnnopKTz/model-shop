import React from 'react'

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav class="navbar is-transparent is-fixed-top" style={{background:"#007065"}} >
    <div class="navbar-start" style={{ margin: "1rem",}}>
      <figure class="image  is-48x48" >
        <img class="is-rounded" style={{background:"#F4C900"}} src="../static/asset/002.png" />
      </figure>
    </div>

    <div class="navbar-end">
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" Link href="/index" style={{color:"white"}}>
            HOME
      </a>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" Link href="/order" style={{color:"white"}}>
          ORDERS
        </a>
        <div class="navbar-dropdown is-boxed">
          <a class="navbar-item" Link href="/order">
            ORDERS
          </a>
          <a class="navbar-item" Link href="/order">
            PRE-ORDERS
          </a>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" Link href="/stock" style={{color:"white"}}>
          PRODUCTS
        </a>
        <div class="navbar-dropdown is-boxed">
          <a class="navbar-item"Link href="/stock">
            STOCK
          </a>
          <a class="navbar-item" Link href="/stock">
            OUT-OF-STOCKS
          </a>
        </div>
      </div>
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" Link href="/customer" style={{color:"white"}}>
              CUSTOMERS
      </a>
          </div>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" Link href="/customer"style={{color:"white"}}>
              EMPLOYEES
      </a>
          </div>
        </div>
        <div>
          <figure class="image is-48x48" style={{ marginLeft: "15px" }}>
            <img class="is-rounded" src="../static/asset/user.png" />
          </figure>
          <button class="button is-danger is-rounded is-small" Link href="/login">LOGOUT</button>
        </div>
      
    </div>

  </nav>

)

export default Nav
