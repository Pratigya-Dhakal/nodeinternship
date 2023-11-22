Overview of the node structure.
 When a client send a request to the application . the application  then finds the routes and routes the find the servers that are in the app.js file which is the starting point of that  application. the sends to express then to controllers  and services processes the requests form controllers then services interacts with the database and the response is send bakck to the app.

 For smaller databases we can use mysql
 if for larger postgres
 or cockroach db

>Structure
1. public: for images audios videos
2. node_modules : created by using npm install express
3. src: 
    1. middleware
    2. controllers
    3. services
    4. routes
    5. database: 
        1. migration
        2. seeders

4. app.js/index.js/server.js : starting point of the app

5. .env
6. .env.example
7. .gitignore
8. package.json: created using npm init
9. package-lock.json: created using npm install



