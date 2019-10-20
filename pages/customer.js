import React from 'react'
import Head from 'next/head'
import Add from '../components/add_button'
import CT from '../components/customer_table'

const Home = () => (
    <div>
        <Head>
            <title>Customer</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <div class="column is-offset-11 has-text-centered"><Add /></div>

        <div class="column is-offset-1"><CT /></div>
    </div>



)

export default Home
