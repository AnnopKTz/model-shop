import React from 'react'

const Inputnaja = ({ text }) => (
    <p>{text}</p>
)

const Add = () => { 
    const add = "ADD+"
    return (

        <div class="is-1 has-text-lefted">
            <td><button class="button is-success is-rounded"><Inputnaja text={add} /></button></td>
             
        </div>

    )
}

export default Add