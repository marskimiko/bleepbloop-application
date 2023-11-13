# BleepBloop

# Repository URL:
- https://github.com/marskimiko/bleepbloop-application

# Video Walkthrough:
https://www.youtube.com/watch?v=ofgClSuVnUI

# Blogpost inspired by BleepBloop

# Project Philosophy: 

BleepBloop is a website for electronic musicians to organize their dawless music setups. Rather than trying to remember different systems for various performances or songs, BleepBloop is a place where you can create and organize your creations in one space. 

# Features:

- Upon loading the website it takes you to the home page with instructions to login or signup in order to have access to the rest of the application, as well as a "learn more" button which will link you to the github repository for the application
- Once you login or signup up you will be taken to a user specific profile page which will show your avatar and username 
- Click on setups in the navigation to see all of your existing setups, as well as to create more setups by clicking on the "create setup" button which will open up a form
- Each setup has a "more info" button, which upon clicking takes you to a details page for the specific setup to show which instruments are included in the setup
- Setups also have the ability to be edited or deleted by click on the "edit" or trash can button
- In the navigation there is also n "Instruments" button that allows you to add more instruments

## Description of app: 

This is a single page full-stack CRUD application that has a back-end that was creating using Ruby and Ruby on Rails and a front-end that was created using React and Javascript

On the front end the application uses a total of 15 components: App.js, EditSetup.js, EditSetupDetails.js, Home.js, InstrumentCard.js, InstrumentContainer.js, InstrumentForm.js, Instruments.js, Login.js, Navigation.js, Setup.js, SetupDetails.js, SetupForm.js, Setups.js, Signup.js

Client-side routes using React-Router: Home, Setups, Instruments, Signup, Login, Logout

Styling was done using CSS and Bootstrap

## Technologies used:

- React
- Javascript
- HTML
- CSS
- Bootstrap
- Material UI
- Ruby
- Ruby on Rails
- Active Record
- Active Storage

## Installation

1. Fork and clone the repository
2. Back-end
  - cd into the project directory
  - run 'bundle install'
  - run 'rails db:migrate'
  - run 'rails db:seed'
  - run 'rails s' to start the server
3. Front-end
  - cd into the client folder
  - run 'npm install'
  - run 'npm start' and the application will open into browser


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)


## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm

## Environment Setup

### Install the Latest Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```console
$ ruby -v
```

We recommend version 2.7.4. If you need to upgrade you can install it using rvm:

```console
$ rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```console
$ gem install bundler
$ gem install rails
```

### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is not 16.x.x, install it and set it as the current and
default version with:

```sh
nvm install 16
nvm use 16
nvm alias default 16
```

You can also update your npm version with:

```sh
npm i -g npm
```
