import React from 'react';
import './BlogSection.css';

const BlogSection = () => {
  return (
    <section className="container4">
      <div className="row">
        <div className="col-md-12">
          <h1>Want to learn more about Hyperautomation?</h1>
          <p className="text-center">
            Check out our blogs where we talk about the latest in the Hyperautomation Industry!
          </p>
        </div>
      </div>
      <div className="row pt-4 pb-4 blog-grid">
        <div className="col-md-4 col-xs-12 pt-4">
          <div className="single-blog-grid">
            <div className="blog-img">
              <a href="https://bradsol.com/resources/ebooks/transform-financial-operations-with-bradsol-and-automation-anywhere/">
                <img
                  src="https://bradsol.com/wp-content/uploads/2023/01/finance-guide-intelligent-automation.jpg"
                  className="img-fluid rounded"
                  alt="Finance Guide"
                />
              </a>
            </div>
            <div className="blog-content">
              <div className="meta-info">
                <p>28 Jun 2024</p>
              </div>
              <p className="borderbottom">
                <a href="https://bradsol.com/resources/ebooks/transform-financial-operations-with-bradsol-and-automation-anywhere/">
                  Transform Financial Operations with Bradsol and Automation Anywhere
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-xs-12 pt-4">
          <div className="single-blog-grid">
            <div className="blog-img">
              <a href="https://bradsol.com/resources/blogs/the-rag-stack-unlocking-the-power-of-knowledge-graphs/">
                <img
                  src="https://bradsol.com/wp-content/uploads/2024/06/rag-stack.jpg"
                  className="img-fluid rounded"
                  alt="RAG Stack"
                />
              </a>
            </div>
            <div className="blog-content">
              <div className="meta-info">
                <p>27 Jun 2024</p>
              </div>
              <p className="borderbottom">
                <a href="https://bradsol.com/resources/blogs/the-rag-stack-unlocking-the-power-of-knowledge-graphs/">
                  The RAG Stack: Unlocking the Power of Knowledge Graphs
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-xs-12 pt-4">
          <div className="single-blog-grid">
            <div className="blog-img">
              <a href="https://bradsol.com/resources/whitepapers/intelligent-automation-for-all/">
                <img
                  src="https://bradsol.com/wp-content/uploads/2024/06/intelligent-automation-for-all.jpg"
                  className="img-fluid rounded"
                  alt="Intelligent Automation"
                />
              </a>
            </div>
            <div className="blog-content">
              <div className="meta-info">
                <p>14 Jun 2024</p>
              </div>
              <p className="borderbottom">
                <a href="https://bradsol.com/resources/whitepapers/intelligent-automation-for-all/">
                  Intelligent Automation For All
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
