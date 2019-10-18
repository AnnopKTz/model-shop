import React from 'react'
import Head from 'next/head'
import HeadNav from '../components/nav'
import Category from '../components/category'
import Item from '../components/product_item'

const Home = () => (
  <div className="body">
    <div className="nav">
      <HeadNav />
      <br/>
    </div>

    <div className="columns is-mobile">
      <div class="column is-2 ">
        <Category />
      </div>

      <div class="columns is-mobile">
        <div class="column is-4">
          <Item />
        </div>
        <div class="column is-4">
          <Item />
        </div>
        <div class="column is-4">
          <Item />
        </div>
      </div>
    </div>
  </div>

)

export default Home
