# Strapforge

This is a pre-made website skeleton I have built to help me quickly and easily set up new website projects.

## What is in it

- A starting HTML file
  It's written entirely in HTML5, there is no bootstrap nonsense or anything,
  there are a few global classes but nothing extranious.
- A starting set of SASS files
  Including a reset, some pre-defined global styles and reusable classes. These are spread across several
  stylesheets and are concatenated into one 'core.css' file.
- A starting set of JS files
  A prod.js file and a dev.js file. 'Prod' is largely empty apart from setting up the 'core' object.
  'dev' has some handy debug tools which should not be included on production.
  Both files concatenate into one 'core.js' file.
- Set up files for Bower and Node.js
- a '.gitignore' file designed for use with sublime projects.
- a pre-set directory structure which is detailed below.

## The directory structure

/ --
  -- /public
  ---- /app
  ------ index.html
  ---- /lib
  ---- /static
  ------ /css
  ------ /fonts
  ------ /images
  ------ /scripts
  -- /src
  ---- /js
  ---- /sass
  .bowerrc
  .gitignore
  gulpfile.js
  LICENSE
  package.js
  README.md

  Additional directories and files will be generated after running 'npm install' and 'bower install'.
