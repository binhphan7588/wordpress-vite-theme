<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vite App</title>
  <link rel="stylesheet" href="<?= get_theme_file_uri() ?>/assets/css/lib.css">
  <link rel="stylesheet" href="<?= get_theme_file_uri() ?>/assets/css/style.css">
</head>

<body>
  <div class="text-center text-8xl h-full flex items-center justify-center">
    <p>Check hmr stream This is new way to build theme for wordpress</p>
  </div>
  <?php if (wp_get_environment_type() === 'local'): ?>
    <script type="module" src="http://localhost:5173/entry.js"></script>
  <?php endif; ?>
  <script src="<?= get_theme_file_uri() ?>/assets/js/main.js"></script>
</body>

</html>