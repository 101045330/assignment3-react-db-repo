<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Layout</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <header class="container-fluid">
    <div class="row">
      <!-- Logo (20%) -->
      <section class="col-md-2 col-12">
        <img src="logo.png" alt="Logo" class="img-fluid">
      </section>
      
      <!-- Chart (20%) -->
      <section class="col-md-2 col-12">
        <!-- Chart Placeholder -->
        <div class="bg-light" style="height: 100px;">Chart</div>
      </section>

      <!-- Heading Level 1 (60%) -->
      <section class="col-md-8 col-12">
        <h1>Heading Level 1</h1>
      </section>
    </div>
  </header>

  <nav class="container-fluid">
    <div class="row">
      <section class="col-12">
        <ul class="nav">
          <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
        </ul>
      </section>
    </div>
  </nav>

  <main class="container-fluid">
    <div class="row">
      <!-- Content (70%) -->
      <section class="col-md-8 col-12">
        <p>Main content goes here.</p>
      </section>

      <!-- Form (30%) -->
      <section class="col-md-4 col-12">
        <form>
          <div class="mb-3">
            <label for="exampleInput" class="form-label">Input</label>
            <input type="text" class="form-control" id="exampleInput" placeholder="Enter something">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </section>
    </div>
  </main>

  <footer class="container-fluid">
    <div class="row">
      <!-- Copyright (60%) -->
      <section class="col-md-7 col-12">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </section>

      <!-- UL Li A (40%) -->
      <section class="col-md-5 col-12">
        <ul class="list-unstyled d-flex justify-content-end">
          <li><a href="#" class="text-decoration-none">Privacy Policy</a></li>
          <li><a href="#" class="text-decoration-none ms-3">Terms of Service</a></li>
        </ul>
      </section>
    </div>
  </footer>

  <!-- Bootstrap JS and Popper.js -->
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"></script>
</body>
</html>
