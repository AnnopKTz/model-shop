import React from 'react'

const Stock = () => (
  <div>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th><abbr title="ProductNumber">No.</abbr></th>
          <th>ProductName</th>
          <th>Category</th>
          <th>Stock</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>38</td>
          <td>23</td>
          <td>12</td>
          <td><button class="button is-success is-rounded">Detail</button></td>
        </tr>
        <tr>
          <th>2</th>
          <td>38</td>
          <td>20</td>
          <td>11</td>
          <td><button class="button is-success is-rounded">Detail</button></td>
        </tr>
       
      </tbody>
    </table>
  </div>
)

export default Stock;