import React from 'react'
import EmTable from '../components/employee_table'
import HeadNav from '../components/nav'

const Employee = () => (
    <div>
        <div>
            <HeadNav />
            <br />
        </div>
        <div className="column is-full" style={{ marginTop: "2.5%" }}>
            <EmTable />
        </div>
    </div>
)

export default Employee;