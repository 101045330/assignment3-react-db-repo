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

 

  <!-- Bootstrap JS and Popper.js -->
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"></script>
</body>
</html>
