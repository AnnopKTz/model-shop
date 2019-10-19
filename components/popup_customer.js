import React from 'react'

const Inputnaja = ({ text }) => (
    <p>{text}</p>
)

const CP = () => {
    return (
        <div>
            <div style={{ background: "lightblue" }}>
                <div class="columns " style={{ marginTop: "2%" }}>
                    <div class="column is-1" style={{ marginLeft: "2%" }}> No.xx </div>
                    <div class="column ">Name.XXXX </div>
                    <div class="column is-offset-9"><button class="button is-danger">X</button></div>
                </div>
            </div>
            <br></br>
            <div style={{marginLeft:"2%"}}>
                <div class="columns is-fullwidth">
                    <div class="column is-3"><p>CustomerNumber</p></div>
                    <div class="column is-offset-8" ><p><button class="button is-success">UPDATE</button></p></div>
                </div>
            </div>
            <div style={{marginLeft:"2%"}}>
                <div class="columns is-fullwidth">
                    <div class="column is-3"><p>CustomerNumber</p></div>
                    <div class="column is-offset-8" ><p><button class="button is-success">UPDATE</button></p></div>
                </div>
            </div>
            <div style={{marginLeft:"2%"}}>
                <div class="columns is-fullwidth">
                    <div class="column is-3"><p>CustomerNumber</p></div>
                    <div class="column is-offset-8" ><p><button class="button is-success">UPDATE</button></p></div>
                </div>
            </div>

        </div>
    )
}

export default CP