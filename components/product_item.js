import React from 'react'

const Item = () => (
    <div className="card">
  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title is-4">John Smith</p>
        <p className="subtitle is-6">@johnsmith</p>
      </div>
    </div>

    <div className="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br/>
    </div>
    <footer className="card-footer">
    <a href="#" className="card-footer-item">Save</a>
    <a href="#" className="card-footer-item">Edit</a>
    <a href="#" className="card-footer-item">Delete</a>
  </footer>
  </div>
</div>
)

export default Item;