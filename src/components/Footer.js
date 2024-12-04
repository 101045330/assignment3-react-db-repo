import React from 'react';

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="row">
        {/* Copyright (60%) */}
        <section className="col-md-7 col-12">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </section>

        {/* UL Li A (40%) */}
        <section className="col-md-5 col-12">
          <ul className="list-unstyled d-flex justify-content-end">
            <li><a href="#" className="text-decoration-none">Privacy Policy</a></li>
            <li><a href="#" className="text-decoration-none ms-3">Terms of Service</a></li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;