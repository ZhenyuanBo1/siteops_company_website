function Features() {
  const features = [
    'Enterprise-grade security with SOC 2 compliance',
    'Seamless integration with existing tools and workflows',
    '24/7 dedicated support from our expert team',
    'Scalable infrastructure that grows with your business',
    'Real-time reporting and actionable insights'
  ]

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-content">
          <div className="features-text">
            <h2>Built for Enterprise Success</h2>
            <p>
              Our platform is designed from the ground up to meet the demanding
              requirements of modern enterprises. From security to scalability,
              we've got you covered.
            </p>
            <ul className="feature-list">
              {features.map((feature, index) => (
                <li key={index}>
                  <div className="feature-check">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="features-image">
            <div className="features-image-placeholder">
              Dashboard Preview
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
