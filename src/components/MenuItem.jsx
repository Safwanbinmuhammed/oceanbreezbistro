import React from 'react'
import '../styles/MenuItem.css'

export default function MenuItem({ name, category, price, description, isVegetarian }) {
  return (
    <article className="menu-card">
      <div className="menu-card-header">
        <h3 className="menu-name">{name}</h3>
        {isVegetarian && <span className="veg-badge">Vegetarian</span>}
      </div>
      <p className="menu-desc">{description}</p>
      <div className="menu-meta">
        <span className="menu-category">{category}</span>
        <span className="menu-price">₹{price.toFixed(2)}</span>
      </div>
    </article>
  )
}
