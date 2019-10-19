import React from 'react';

const Search_Bar = () => (
    <div className="columns">
        <div className="column is-2"></div>
        <div className="column is-half is-offset-one-quater is-mobile">
            <div className="panel-block">
                <p className="control has-icons-left">
                    <input className="input" type="text" placeholder="Search" />
                </p>
            </div>
        </div>
    </div>
)

export default Search_Bar;