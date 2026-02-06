function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <a href="/" className="logo">
          <div className="logo-icon">S</div>
          <span>SiteOps Technologies</span>
        </a>

        <nav className="nav">
          <a href="#products">Products</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="header-cta">Get Started</button>
      </div>
    </header>
  )
}

export default Header
