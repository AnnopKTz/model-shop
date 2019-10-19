import React from 'react';
import Nav from '../components/nav';

const Stock = () => (
    <div>
        <div className="nav">
            <Nav />
            <br />
        </div>
        <div id="body">
            <div class="tabs tabs is-centered is-boxed is-right">
                <ul>
                    <li class="is-active"><a>All-Of-Product</a></li>
                    <li><a>Classic-Cars</a></li>
                    <li><a>Vintage-Cars</a></li>
                    <li><a>Motocycles</a></li>
                    <li><a>Trucks&Buses</a></li>
                    <li><a>Trains</a></li>
                    <li><a>Planes</a></li>
                    <li><a>Ships</a></li>
                </ul>
            </div>
        </div>
    </div>
)

export default Stock;
