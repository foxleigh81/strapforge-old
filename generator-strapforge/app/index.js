'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('Strapforge') + ' generator! We\'re still in alpha at the moment so please excuse bugs' 
    ));

    this.log(chalk.yellow('This installer will set up a static website structure with jQuery and Modernizr installed.'));
    this.log(chalk.blue('Let\'s set up a few options:'));
    
    var prompts = [
      {
        name: 'appName',
        message: 'What is the name of your project?',
        default: "My New App"
      },
      {
        name: 'siteUrl',
        message: 'What is the live URL of your project? (Don\'t forget the http://)',
        default: "http://www.google.com"
      },
      {
        name: 'siteLocale',
        message: 'What is the location of your project in ISO format? (see http://is.gd/sJBhxf if you are unsure)',
        default: "en_GB"
      },
      {
        name: 'siteDescription',
        message: 'How would you describe your project?',
        default: "Description to be added later"
      }
    ];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;
      this.siteUrl = props.siteUrl;
      this.siteLocale = props.siteLocale;
      this.siteDescription = props.siteDescription;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('bower.json'),
        this.destinationPath('bower.json')
      );
      this.fs.copy(
        this.templatePath('.jshintrc'),
        this.destinationPath('.jshintrc')
      );
      this.fs.copy(
        this.templatePath('.bowerrc'),
        this.destinationPath('.bowerrc')
      );
      this.fs.copy(
        this.templatePath('.gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('LICENSE'),
        this.destinationPath('LICENSE')
      );
      this.fs.copy(
        this.templatePath('gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
      this.fs.copy(
        this.templatePath('README.md'),
        this.destinationPath('README.md')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('public'),
        this.destinationPath('public')
      );
      this.mkdir("public/static/images");
      this.fs.copy(
        this.templatePath('src'),
        this.destinationPath('src')
      );
      var context = {
            site_name: this.appName,
            site_url: this.siteUrl,
            site_locale: this.siteLocale,
            site_desc: this.siteDescription
        };
      this.template("_index.html", "public/index.html", context);
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
