import React from 'react'

const Inputnaja = ({ text }) => (
    <p>{text}</p>
)

const Test = () => {
    const test = "yaaaaa"
    return (

    <div>       
        <div class="columns">
            <div class="column ">
            <Inputnaja text={ test } />
            </div>
        <div class="column">
            Second column
  </div>
        <div class="column">
            Third column
  </div>
        <div class="column">
            Fourth column
  </div>
    </div>
    </div>
    )
}

export default Test