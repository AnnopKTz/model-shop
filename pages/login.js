import React from 'react'

const HOME = () => {
    return (
        <div >
            <div>
                <div class="columns is-fullwidth">
                    <div class="column is-6" style={{ background: "#EEE8AA" }}>
                        <figure class="image   is-square" ><img class="is-rounded" style={{ background: "#F4C900" }} src="../002.png" /></figure>
                    </div>
                    <div class="column is-6" style={{ background: "white" }}>
                        <table style={{ marginTop: "20%", marginLeft: "40%" }}>
                            <table class="is-size-1" >
                                <h1 className="h3 mb-3 font-weight-normal">WELCOME</h1>
                            </table>
                        </table>
                        <table style={{ marginTop: "15%", marginLeft: "40%" }}>
                            <p style={{ marginLeft: "4%" }}>ID</p>
                            <div style={{ marginTop: "2%", marginBottom: "5%" }}><tr><input class="input" style={{ borderRadius: "10px" }} type="text"></input></tr></div>
                            <p style={{ marginLeft: "4%" }}>PASSWORD</p>
                            <div style={{ marginTop: "2%",marginBottom:"20%" }}><tr><input class="input" style={{ borderRadius: "10px" }} type="text"></input></tr></div>
                            <p><button class="button" style={{color:"white",background:"lightblue"}}>LOG IN</button></p>
                        </table>


                    </div>
                </div>
            </div>
        </div>

    )
}

export default HOME
