import React from 'react';

const Article = () => {
  return (
    <article className="container my-4">
      <h1>Heading 1</h1>

      {/* Image and Blockquote in the same row */}
      <div className="row align-items-center mb-4">
        {/* Image (responsive behavior with Bootstrap) */}
        <div className="col-md-6 mb-3">
          <img
            src="https://via.placeholder.com/300"
            alt="Placeholder"
            className="img-fluid rounded"
          />
        </div>

        {/* Blockquote */}
        <div className="col-md-6 mb-3">
          <blockquote className="blockquote">
            <p>"This is a blockquote text."</p>
          </blockquote>
        </div>
      </div>

      {/* Paragraph in a new row */}
      <div className="row">
        <div className="col-12">
          <p>
            Content goes here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </article>
  );
};

export default Article;
