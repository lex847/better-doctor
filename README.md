# _Doctor Lookup_

##### Epicodus JavaScript Course Week 2 - Code Review

##### An application to find a better doctor near you! 03/23/2018

## By Hannah Lee

# Description

This application demonstrates asynchrony and calling the BetterDoctor API using JavaScript. Returns a list of doctors matching a medical illness or doctor name search.

## Behavior

| Spec | Input | Output |
| :---------------| :---------------| :---------------|
| Returns a list of doctors in the Portland area based on the medical search query. | "headache" | Returns list of doctors or "Sorry, there are no doctors specializing in that area." |
| Returns a list of doctors in the Portland area based on the name search query. | "Hannah" | Returns list or "There are no doctors with that name." |
| If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients | "Hannah" | Hannah Hilbert, Accepting New Patients?: true, 1500 NE Irving St, Portland, OR 97232, Phone: 503-232-0138, Website: No Website Available |
| If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is. | Click Submit | There was an error processing your request: 400 error handling your request - Bad Request. Please try again. |
| If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. | "Big Bird" | There are no doctors with that name. |

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
Register at https://developer.betterdoctor.com/ to receive API key at URL below. Place in .env file.

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
