import React from 'react';

const Menu = () => (
    <div>
        <div className="columns">
            <div className="column">
                <div className="columns has-text-centered is-fullwidth" style={{margin: "0px" , padding: "0px"}}>
                    <div className="column "style={{padding: "3px"}}>
                        <p class="title is-centered" style={{fontSize: "25px"}}>CATALOG</p>
                    </div>
                </div>
        <hr style={{margin: "0px",}} />
            <div className="columns">
                <div className="column " style={{margin: "5px"}}>
                    <button className="button is-fullwidth">Classic-Cars</button>
                    <button className="button is-fullwidth">Vintage-Cars</button>
                    <button className="button is-fullwidth">Motocycles</button>
                    <button className="button is-fullwidth">Trucks&Buses</button>
                    <button className="button is-fullwidth">Trains</button>
                    <button className="button is-fullwidth">Planes</button>
                    <button className="button is-fullwidth">Ships</button>
                </div>
            </div>
        </div >
        </div>
    </div >
)

export default Menu;