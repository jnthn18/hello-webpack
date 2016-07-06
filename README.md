##Webpack with React/Redux and Sass

This is a webpack setup with React/Redux and Sass for quickstarting projects. The Redux implementation is based off of Dan Abramov's todo tutorial on egghead.io

###Why webpack?
[By Pete Hunt](https://github.com/petehunt/webpack-howto)

* **It's like browserify** but can split your app into multiple files. If you have multiple pages in a single-page app, the user only downloads code for just that page. If they go to another page, they don't redownload common code.

* **It often replaces grunt or gulp** because it can build and bundle CSS, preprocessed CSS, compile-to-JS languages and images, among other things.

* It supports AMD and CommonJS, among other module systems (Angular, ES6). If you don't know what to use, use CommonJS.

##Getting Started
```
npm install

npm start
```