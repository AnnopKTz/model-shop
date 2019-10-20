import React from 'react'

const Inputnaja = ({ text }) => (
    <p>{text}</p>
)

const AddCustomer = () => {
    return (
        <div>
            <div class="columns" style={{ margin: "5%" }}>
                <div class="box is-rounded has-text-weight-bold" style={{ background: "lightgreen", color: "white" }}>MEMBER REGISTER</div>
            </div>
            <div style={{ marginLeft: "15%" }}>
                <div class="columns" style={{ display: "flex" }}>
                    <div class="column">
                        <div style={{ marginLeft: "1.5%" }}><tr >FirstName</tr></div>
                        <div style={{ marginTop: "2%" }}><tr><input class="input" style={{ borderRadius: "10px" }} type="text"></input></tr></div>
                    </div>
                    <div class="column" >
                        <div style={{ marginLeft: "1.5%" }}><tr >LastName</tr></div>
                        <div style={{ marginTop: "2%" }}><tr><input class="input" style={{ borderRadius: "10px" }} type="text"></input></tr></div>
                    </div>
                </div>
            </div>
            <div style={{ marginLeft: "15%" }}>
                <div class="columns" style={{ display: "flex" }}>
                    <div class="column">
                        <div style={{ marginLeft: "1.5%" }}><tr >FirstName</tr></div>
                        <div style={{ marginTop: "2%" }}><tr><input class="input" style={{ borderRadius: "10px" }} type="text"></input></tr></div>
                    </div>
                    <div class="column" >
                        <div style={{ marginLeft: "1.5%" }}><tr >LastName</tr></div>
                        <div style={{ marginTop: "2%" }}><tr><input class="input" style={{ borderRadius: "10px" }} type="text"></input></tr></div>
                    </div>
                </div>
            </div>
            <div style={{ marginLeft: "15%" }}>
                <div class="columns" style={{ display: "flex" }}>
                    <div class="column">
                        <div style={{ marginLeft: "1.5%" }}><tr >FirstName</tr></div>
                        <div style={{ marginTop: "2%" }}><tr><input class="input" style={{ borderRadius: "10px" }} type="text"></input></tr></div>
                    </div>
                    <div class="column" >
                        <div style={{ marginLeft: "1.5%" }}><tr >LastName</tr></div>
                        <div style={{ marginTop: "2%" }}><tr><input class="input" style={{ borderRadius: "10px" }} type="text"></input></tr></div>
                    </div>
                </div>
            </div>
            <div style={{ marginLeft: "15%" }}>
                <div class="columns" style={{ display: "flex" }}>
                    <div class="column">
                        <div style={{ marginLeft: "1.5%" }}><tr >FirstName</tr></div>
                        <div style={{ marginTop: "2%" }}><tr><input class="input" style={{ borderRadius: "10px" }} type="text"></input></tr></div>
                    </div>
                    <div class="column" >
                        <div style={{ marginLeft: "1.5%" }}><tr >LastName</tr></div>
                        <div style={{ marginTop: "2%" }}><tr><input class="input" style={{ borderRadius: "10px" }} type="text"></input></tr></div>
                    </div>
                </div>
            </div>
            <div style={{ marginLeft: "15%" }}>
                <div class="columns" style={{ display: "flex" }}>
                    <div class="column">
                        <div style={{ marginLeft: "1.5%" }}><tr >FirstName</tr></div>
                        <div style={{ marginTop: "2%" }}><tr><input class="input" style={{ borderRadius: "10px" }} type="text"></input></tr></div>
                    </div>
                    <div class="column" >
                        <div style={{ marginLeft: "1.5%" }}><tr >LastName</tr></div>
                        <div style={{ marginTop: "2%" }}><tr><input class="input" style={{ borderRadius: "10px" }} type="text"></input></tr></div>
                    </div>
                </div>
            </div>
            <div style={{ marginLeft: "30%" }}>
                <div class="columns" style={{ display: "flex" }}>
                    <div class="column is-2">
                        <div style={{ marginLeft: "1.5%",marginTop:"50%"}}><button class="button is-info " style={{borderRadius:"15px",width:"100px"}}>ADD</button></div>
                    </div>
                    <div class="column is-2">
                        <div style={{marginLeft: "100%",marginTop:"50%"}}><button class="button is-success " style={{borderRadius:"15px",width:"100px"}}>UPDATE</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCustomer