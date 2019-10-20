import React from 'react'

const Inputnaja = ({ text }) => (
    <p>{text}</p>
)

const CT = () => {
    return (

        <div>
        <table class="table is-fullwidth">
          <tbody>
            <tr>
              <th class="has-text-centered">CustomerNumber</th>
              <th>Fname</th>
              <th>Lname</th>
              <th>CreditLimit</th>
              <th>Point</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th class="has-text-centered">1</th>
              <td>AAA</td>
              <td>BBB</td>
              <td>99/99/9999</td>
              <td>999</td>
              <td>9-999-9999</td>
              <ul><td><button class="button is-success is-rounded">More</button></td>
              <td><button class="button is-danger is-rounded">Delete</button></td></ul>
            </tr>
            <tr>
              <th class="has-text-centered">1</th>
              <td>AAA</td>
              <td>BBB</td>
              <td>99/99/9999</td>
              <td>999</td>
              <td>9-999-9999</td>
              <ul><td><button class="button is-success is-rounded">More</button></td>
              <td><button class="button is-danger is-rounded">Delete</button></td></ul>
            </tr>
          </tbody>
        </table>
        </div>  

    )
}

export default CT