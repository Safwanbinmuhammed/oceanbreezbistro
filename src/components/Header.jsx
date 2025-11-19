import React from 'react'

export default function Header({ title, tagline }) {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="restaurant-title">{title}</h1>
        <p className="tagline">{tagline}</p>
      </div>
    </header>
  )
}
