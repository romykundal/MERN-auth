# MERN-auth and CRUD oprations 

## react js mongodb atlas express jwt auth token backend bootstrap

```
Build functionality for user authentication on the front-end as well as the backend 
(You are free to use any third party library both on the front-end as well as the backend). 
a. A login page should take an email and a password to log the user in. 
b. A register page should take an email and a password to register the user. 
c. REST API routes “login” and “register” enabling the same functionality. 
d. The passwords have to be stored after hashing on the database. 
e. Access JWT tokens have to be refreshed every hour
```

```
Build functionality to browse, add, modify and delete tasks.
a. A task contains a title and a description.
b. A “tasks” page which provides the following functionality
 Browse the tasks
 Add a task.
 Delete the tasks
```






## project structure
```terminal
LICENSE
package.json
server/
   package.json
   .env (to create .env, check [prepare your secret session])
client/
   package.json
...
```

# Usage (run fullstack app on your machine)

## Prerequisites
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)
```terminal
$ cd client   // go to client folder
$ npm i       // npm install packages
$ npm run dev // run it locally
// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

## Web Server APi Side usage(PORT: 1337)

### Prepare your secret

run the script at the first level:

(You need to add a JWT_SECRET in .env to connect to MongoDB)

```terminal
// in the root level
$ echo "JWT_SECRET=YOUR_JWT_SECRET" >> ./server/src/.env
```

### Start

```terminal
$ cd server   // go to server folder
$ npm i       // npm install packages
$ npm start // run it locally
