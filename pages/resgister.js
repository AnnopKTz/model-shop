import React from 'react'
import Head from 'next/head'
import AddCustomer from '../components/add_customer'

const Home = () => (
    <div>
        <Head>
            <title>Home</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <div>
            <AddCustomer />
        </div>
    </div>




)

export default Home