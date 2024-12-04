import React from 'react';

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="row">
        {/* Copyright (60%) */}
        <section className="col-md-7 col-12">
          <p>&copy; 2024  <u>S</u>ome <u>R</u>ights <u>P</u>reserved.</p>
        </section>

        {/* UL Li A (40%) */}
        <section className="col-md-5 col-12">
          <ul className="list-unstyled d-flex justify-content-end">
            <li><a href="#" className="text-decoration-none">Privacy Policy</a></li>
            <li><a href="#" className="text-decoration-none ms-3">Terms of Service</a></li>
          </ul>
        </section>
      </div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />

      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"></script>
    </footer>
  );
}

export default Footer;