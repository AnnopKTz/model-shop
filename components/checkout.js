import React from 'react';

const Search_Bar = () => (
    <div className="columns">
        <div className="column is-2"></div>
        <div className="column is-half is-offset-one-quater is-mobile">
            <div class="panel-block">
                <p class="control has-icons-left">
                    <input class="input" type="text" placeholder="Search" />
                </p>
            </div>
        </div>
    </div>
)

export default Search_Bar;