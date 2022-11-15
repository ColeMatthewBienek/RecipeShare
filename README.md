# react-app-template
### Instructions for creating a basic react template

- create git repo and project directory
- npm init -y
- - to initialize package.json
- create directory structure:
- - client
- - - dist (folder)
- - - - index.html
- - - src (folder)
- - - - app.js ( or .jsx)
- - - server (folder)
- - - - server.js
- - - index.js

### Install dependencies
(see package.json for details)
- node
- react, react-dom
- babel
- mySql
- webpack
- axios
- express

### add npm scripts to start server/ run app
- see package.json

## Webpack.config.js
(copied from electric.pen)
Webpack is a program that compiles JS files into a single file. It is very modular so it an be used to compile many different types of projects. This example is going to be set up to compile React but it can be altered to fit other project types simply by changing the *rules* in the module object.

Basic webpack has three parts - an entry, an output, and module
The entry defines where your javascript files start from. It is the root of your javascript dependency tree The output is a path to a file where webpack saves its bundle
The module contains a list of rules
- rules contain 3 main parts:
- - a *test* that describes (with regex) files that need to be processed
- - an *exclude* that describes folders/files that should be skipped
- - a *use* that contains the modules that will be used to compile the files
    in the test for this set of rules

there can be more than one set of rules (CSS compilation is another common one) but our simple example is just for React.

## (see webpack.config.js)
## .babelrc file
## run npm install to load dependency libs

## Write basic html boilerplate in index.html
## Code index.js --

