import React from 'react'
import Head from 'next/head'
import HeadNav from '../components/nav'
import Category from '../components/category'
import Item from '../components/product_item'
import Search_bar from '../components/checkout'

const Home = () => (
  <div className="body">
    <div className="nav">
      <HeadNav />
    </div>
    <div>
        <Search_bar />
        <br/>
    </div>
    <div className="columns is-mobile">
      <div class="column is-3 ">
        <Category />
      </div>
      
      <div class="columns is-mobile">
        <div class="column is-3">
          <Item />
        </div>
        <div class="column is-3">
          <Item />
        </div>
        <div class="column is-3">
          <Item />
        </div>
      </div>
    </div>
  </div>

)

export default Home
