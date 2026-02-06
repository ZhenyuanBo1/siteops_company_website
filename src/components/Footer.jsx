function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">S</div>
              <span>SiteOps Technologies</span>
            </div>
            <p>
              Enterprise solutions for AI-powered communication,
              analytics, and site management.
            </p>
          </div>

          <div className="footer-column">
            <h4>Products</h4>
            <ul>
              <li><a href="#">SiteOps Voice</a></li>
              <li><a href="#">SiteOps Analysis</a></li>
              <li><a href="#">SiteOps Management</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SiteOps Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
