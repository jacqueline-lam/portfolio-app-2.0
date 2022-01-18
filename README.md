# Personal Portfolio App 2.0

## Overview
This is the personal portfolio version 2.0 that showcases Jacqueline Lam's projects, software engineering journey, blog posts and more.

The app is composed of backend rails API and front-end React clients, which use asynchronous Javascript (with the help of redux-thunk middleware) to make HTTP requests to the API and render them to the user interface.

![portfolio demo](./public/portfolio-quick-demo.gif)

* Back End Repo: [Portfolio API](https://github.com/jacqueline-lam/portfolio-api)
* [Video Demo](https://www.youtube.com/watch?v=cTw0wAnVo1c&t=16s)
* [Blog Post pt.1](https://dev.to/jacquelinelam/building-my-personal-portfolio-with-react-redux-pt-1-522k)
* [Blog Post pt.2](https://dev.to/jacquelinelam/building-my-personal-portfolio-with-react-redux-pt-2-3f7o)

## Features
1. User can navigate between home, about, portfolio and blog pages
2. User can filter projects by stacks
3. User can add comments to speciic projects
4. User will have access to the real time blog posts that have been published on dev.to
## Other Features (coming soon)
1. Featured project available on homepage/ about page
2. About page - technical skills to be divided into languages, libraries/ frameworks, databases
3. Project page: project to be displayed as div cards - hover to see description; sort project by date, featured projects (default setting)
4. Blog: sort by date


## Technologies Implemented
1. React.js
2. React hooks to replace class components and lifecycle methods
~~2. Redux to manage state~~
~~3. Redux-thunk to make use of async actions to send data and receive data from the server~~
4. react-router with proper RESTful routing
5. Postgres for data persistence
6. Rails API backend to persist data for the application

## Installation

### Backend Installation
Download zip from my project repository: https://github.com/jacqueline-lam/portfolio-api

Go to your terminal and change directory:

    $ cd portfolio-api

If you don't have Ruby, please install Ruby version `ruby 2.6.1`.

 With Rubygems loaded, you can install all of Rails and its dependencies using the following command through the command line:

    $ gem install rails -v 6.0.3

Use the following command to make Rails executable available.

    $ rbenv rehash

More installation instructions can be found on the [Ruby on Rails Guide](https://guides.rubyonrails.org/v5.0/getting_started.html#installing-rails)

Once Ruby and Rails are installed, run:

    $ gem install bundler

Bundler gem provides us access to a terminal command: `bundle install`

Install the gems and gem dependencies for this app by running:

    $ bundle install

And then run the following to create tables in database:

    $ rails db:migrate

And then run the following to create seed data:

    $ rails db:seed

And then run server:

    $ rails s

You can now browse the API in your browser at your localhost, link to http://localhost:3000/api/v1/projects to see all projects and http://localhost:3000/api/v1/stacks to see all technical stacks.

### Frontend Installation
Download zip from my project repository: https://github.com/jacqueline-lam/portfolio-app-2.0

Make sure Backend API is running at http://localhost:3000/

Now `cd` into `portfolio-app-2.0`, then run:

    $ npm install && npm start

to install all dependencies and start server. You can now browse the application in your browser at your localhost.

## Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/jacqueline-lam/portfolio. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Authors
Jacqueline Lam - @jacqueline-lam

## License

The code is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the project’s codebases is expected to follow the [code of conduct](https://github.com/jacqueline-lam/bolderer_sinatra_app/blob/master/CODE_OF_CONDUCT.md).

## Attributions
* Ellipsis/ Spinner loading gif is provided by loading.io
* Homepage SCSS Animation by Lindsay Grizzard (source: freefrontend.com)
* Navbar based on design by Pixelstretch (https://codepen.io/technext/pen/qBmNbJE)
* Icons provided by https://icons8.com/
-------------



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
