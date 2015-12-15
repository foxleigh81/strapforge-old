#Strapforge/Topaz site generator

##What is this?
It's a Yeoman generator which will set up a site in a few moments and allow you to hit the ground running.

##Roadmap

###v0.01 (Current)
Generates a simple site structure

###v0.02
Generates a site structure in a component based style also replaces gulp with a simple npm script.

eg:

    root
    | - Dist
    | - | - App
    | - Src
    | - | - images
    | - | - scripts
    | - | - styles
    | - | - | - compiled
    | - | - | - prepros
    | - | - templates
    | - | - components
    | - | - | - component_name
    | - | - | - | - component_name.hbs
    | - | - | - | - component_name.js
    | - | - | - | - component_name.json
    | - | - | - | - component_name.styl

The build system, will loop through each component and concatenate the files into one global file.

###v0.1 Alpha release
The generator will be released to the public at this stage.

The only difference between v0.02 and v0.1 will be a polished front-end and a set of pre-defined templates.

###v0.2 Beta release

This release will decouple stylus from the build. Allowing the user to specify either sass, stylus, less or none (none will allow them to create add their own preprocessor)

### V1.0 RC
At this point, the strapforge/topaz website will have a front-end which will generate a zip file for the user to download, therefore making the generator accessible to those who dont wish to use a CLI.
