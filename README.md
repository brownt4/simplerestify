# Sample Restify App

This is a basic restify app. It serves up a static html file.

This app requires node. Install dependencies with `npm install`.

To run the server, use `node server.js`. Files will be served from `localhost:8000`.

# Validation app

For the validation app, we need a user registration with the following fields:
* User Name
  * Must have a minimum length of 6 characters
* First Name
* Last Name
* Date of Birth
  * Must be a date
* Email adress
  * Must be valid email.
* Password
  * Must have uppercase and lowercase characters, as well as a number.
* Password Confirmation
  * Must match the entered password.

These fields must be validated on the client, as well as on the server.

* These links will be useful:
  * https://nodejs.org/en/
  * http://restify.com/
