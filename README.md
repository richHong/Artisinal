# Artisanal

> A hub for both food enthusiasts and new local artisanal businesses. New food businesses and startups dont have an easy way of connecting directly with consumers and other companies. Food enthusiasts will have access to a directory of the newest food companies in their area. With Artisanal, New artisanal food businesses can register their business in the directory to market themselves to both food enthusiasts and other businesses. A quick and easy way for both food enthusiasts to find new artisanal businesses and for new artisanal businesses to expose themselves.

## Team

  - __Product Owner__: Aralya Phinith
  - __Scrum Master__: Dion Fulwood
  - __Development Team Members__: AJ Farley, Dion Fulwood, Aralya Phinith

## Table of Contents

<!-- 1. [Usage](#Usage) -->
1. [Requirements](#requirements)
2. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    2. [Future Features](#future-features)
    3. [Tasks](#tasks)
3. [Contributing](#contributing)

<!-- ## Usage

> Some usage instructions -->

## Requirements

- Node 5.10.0
- MongoDB 3.2.4

For instructions on installing mongoDB, click [here](https://docs.mongodb.org/manual/installation/)

## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
```

First, open a new tab on the terminal to run Mongo...
```sh
sudo mongod
```

...and then open another tab to run the server.
```sh
nodemon server.js
```
### Future Features
1. Business Mailing List: Users can sign up for updates from a business from the page in the directory.
2. Ratings/Reviews: A ratings and review system. Ratings and reviews seen on both the business and user end.
3. Map Location: Using the Google Maps API, feature a map in each businesses profile page.
4. Orders: Businesses can take pick-up orders with a really easy system
5. User Favorites: Users can save their favorite businesses and visit them with ease from any page in the site.
6. Search Algorithm: Displaying to the user food purveyors in their local area by default. Artisanal is meant to work for any area in the globe.

### Roadmap

View the project roadmap [here](https://github.com/Night-Magicians/NightMagicians/issues)

## Contributing

See [CONTRIBUTING.md](_CONTRIBUTING.md) for contribution guidelines.
