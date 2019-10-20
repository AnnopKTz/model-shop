import React from 'react'
import Head from 'next/head'
import Add from '../components/add_button'
import CT from '../components/customer_table'
import Nav from '../components/nav'

const Home = () => (
    <div>
        <Head>
            <title>Customer</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <Nav />
        <div class="column is-offset-11 has-text-centered" style={{marginTop:"8%"}}><Add /></div>

        <div class="column is-offset-1"><CT /></div>
    </div>



)

export default Home
