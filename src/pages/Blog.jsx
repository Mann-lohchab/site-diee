import './Blog.css';
import Dither from '../components/bg';

function Blog({ onBack }) {
  return (
    <div className="blog-container">
      {/* Background */}
      <div className="blog-background">
        <Dither />
      </div>
      
      {/* Navigation */}
      <nav className="blog-nav">
        <button onClick={onBack} className="back-btn">
          <svg className="back-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </button>
      </nav>

      {/* Main Content */}
      <div className="blog-content">
        <div className="blog-wrapper">
          {/* Header */}
          <div className="blog-header">
            <h1 className="blog-title">My Blog</h1>
            <p className="blog-subtitle">
              Sharing insights, tutorials, and thoughts on web development and technology
            </p>
          </div>

          {/* Blog Post Grid */}
          <div className="blog-grid">
            {/* Blog Post 1 */}
            <div className="blog-post">
              <h2 className="post-title">Building Scalable React Applications</h2>
              <p className="post-date">August 20, 2025</p>
              <p className="post-excerpt">
                Learn how to architect React applications for scalability using modern patterns like component composition, hooks, and state management libraries.
              </p>
              <button className="btn-primary">
                Read More
                <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Blog Post 2 */}
            <div className="blog-post">
              <h2 className="post-title">Mastering CSS Grid and Flexbox</h2>
              <p className="post-date">August 15, 2025</p>
              <p className="post-excerpt">
                A deep dive into CSS Grid and Flexbox, exploring how to create responsive layouts with real-world examples and best practices.
              </p>
              <button className="btn-primary">
                Read More
                <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Blog Post 3 */}
            <div className="blog-post">
              <h2 className="post-title">Why TypeScript is a Game-Changer</h2>
              <p className="post-date">August 10, 2025</p>
              <p className="post-excerpt">
                Discover how TypeScript enhances JavaScript development with static typing, better tooling, and improved code maintainability.
              </p>
              <button className="btn-primary">
                Read More
                <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Blog Post 4 */}
            <div className="blog-post">
              <h2 className="post-title">Optimizing Web Performance</h2>
              <p className="post-date">August 5, 2025</p>
              <p className="post-excerpt">
                Tips and techniques for optimizing web performance, including lazy loading, code splitting, and minimizing render-blocking resources.
              </p>
              <button className="btn-primary">
                Read More
                <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;