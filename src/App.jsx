import React from 'react'
import Header from './components/Header'
import MenuItem from './components/MenuItem'
import { mainCourses, desserts } from './data'
import './styles/index.css'

export default function App() {
  const totalItems = mainCourses.length + desserts.length
  const currentYear = new Date().getFullYear()

  return (
    <div className="app">
      <Header title="Ocean Breeze Bistro" tagline="Delicious Food, Made Fresh Daily" />
      <main className="container">
        <section className="menu-section">
          <h2 className="category-heading">Main Courses</h2>
          <div className="menu-grid">
            {mainCourses.map(item => (
              <MenuItem key={item.id} {...item} />
            ))}
          </div>
        </section>

        <section className="menu-section">
          <h2 className="category-heading">____Desserts____</h2>
          <div className="menu-grid">
            {desserts.map(item => (
              <MenuItem key={item.id} {...item} />
            ))}
          </div>
        </section>

        <aside className="restaurant-info">
          <h3>Restaurant Info</h3>
          <p><strong>Total items:</strong> {totalItems}</p>
          <p><strong>Hours:</strong> Open Daily: 11 AM - 10 PM</p>
          <p><strong>Contact:</strong> +91 98765 43210 • 123 Seaside Ave, Bay City</p>
        </aside>
      </main>

      <footer className="footer">
        <div>
          <strong>Ocean Breeze Bistro</strong> • <a href="mailto:hello@oceanbreeze.example">hello@oceanbreeze.example</a>
        </div>
        <div>© {currentYear} Ocean Breeze Bistro</div>
      </footer>
    </div>
  )
}
