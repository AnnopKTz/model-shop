 import React from 'react'

const Table = () => {

    return (
        <div class="card"  style={{background:"#ffeecf"}}>
            <div class="card-content">
                <table class="table is-fullwidth"  style={{background:"#ffeecf"}}>
                    <thead>
                        <tr>
                            <th>OrderNumber</th>
                            <th>OrderDate</th>
                            <th>RequiredDate</th>
                            <th>ShippedDate</th>
                            <th>Status</th>
                            <th>Commemt</th>
                            <th>Customer</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <br />
                </table>
            </div>
        </div>

            )
        }
        
export default Table