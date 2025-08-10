import { Link } from 'react-router-dom';

function NoMatch() {
  return (
    <div className="container">
      <div className="page-content">
        <div className="error-section">
          <h1>404 - Page Not Found</h1>
          <p>Oops! It looks like this page has left the stage.</p>
          <div className="error-actions">
            <Link to="/" className="cta-button primary">Return Home</Link>
            <Link to="/contact" className="cta-button secondary">Contact Me</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoMatch;
