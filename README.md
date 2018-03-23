# _Doctor Lookup_

##### Epicodus JavaScript Course Week 2 - Code Review

##### An application to find a better doctor near you! 03/23/2018

## By Hannah Lee

# Description

This application demonstrates asynchrony and calling the BetterDoctor API using JavaScript.

## Behavior

| Spec | Input | Output |
| :---------------| :---------------| :---------------|
| Returns a list of doctors in the Portland area based on the medical search query. | Click button | Text |
| Returns a list of doctors in the Portland area based on the name search query. | Click button | Text |
| If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients | Click button | Text |
| If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is. | Click button | Text |
| If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. | Click button | Text |

<kbd><img src="src/img/xxx.jpg" alt=""></kbd>

## Technologies Used
------------

```
Application: JavaScript, jQuery, Bootstrap, HTML
Testing: Jasmine, Karma
Environment: npm, webpack, babel, esLint
API: BetterDoctor
```

Installation
------------

```
$ git clone https://github.com/RunHannah/better-doctor
```

Application requires node.js - installation instructions:

```
https://www.learnhowtoprogram.com/javascript/getting-started-with-javascript-2f9a73dc-b7f5-4a22-9101-e69d49f552ac/installing-node-js
```

Install required npm packages and dependencies:

```
$ npm install
$ npm run build
```
Register at XXX to receive API key at URL below. Place in .env file.

```
https://developer.betterdoctor.com/

```
Start the webserver:
```
$ npm run start
```

## Known Bugs

 * _No known bugs at this time._

## Support and contact details

 _To suggest changes, submit a pull request in the GitHub repository._

### License

 _Licensed under MIT license_
-------

GNU GPL v2. Copyright 2018 **Hannah Lee**
