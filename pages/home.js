import React from 'react'
import Head from 'next/head'
import SMenu from '../components/show_menu'
import SCat from '../components/show_cat'

const Home = () => (
    <div>
        <Head>
            <title>Home</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <div>

            <br></br>
            <div class="columns">
                <div class="column is-2" style={{ marginLeft: "4%" }}>icon</div>
                <div class="column is-offset-7" style={{ marginLeft: "60%" }}>search</div>
            </div>
        </div>
        <br></br>
        <div class="columns">
            <div style={{ marginLeft: "2%" }}><SMenu /></div>
            <br></br>
            <div class="rows" style={{ marginLeft: "2%" }}>
                <div class="row"><SCat /></div>
                <br></br>
                <div class="row"><SCat /></div>
            </div>
        </div>
    </div>




)

export default Home