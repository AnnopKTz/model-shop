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
      <br/>
    </div>
   
    <div className="columns" style={{marginTop:"1.5%"}}>
      <div className="column" >
        <div className="column">
        <div className="columns is-mobile" style={{ position : "absolute", margin: "12px" }}>
          <div class="column ">
            <Category />
          </div>
        </div>
        </div>
    
      <div className="column"style={{ paddingLeft: "200px", margin: "0px" }}>
      <div className="columns" >
      <div className="column">
        <Search_bar />
      </div>
    </div>
        <div className="columns is-mobile" style={{ margin: "20px" }}>
          <div class="column ">
            <Item />
          </div>
          <div class="column ">
            <Item />
          </div>
          <div class="column">
            <Item />
          </div>
          <div class="column">
            <Item />
          </div>
        </div>
      </div>
    </div>
  </div >
  </div>



)

export default Home
