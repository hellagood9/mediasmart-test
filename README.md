# Coding Test

## Usage

```bash
Rename '.env.example' to '.env'

cd client && npm i
cd server && npm i
```

## Scripts

* Script to start the Client

```javascript
npm start // http://localhost:3000
```

* Script to start the Server

```javascript
npm run dev // http://localhost:5000
```

## About 

### Keep in mind: The server will not start until the seed process is finished.

The script that starts the server connects to the local DB, makes a request to the API and performs the seed with the obtained data. 

#### This process will take a few seconds. ####

While the seed is taking place the console provides information about the page it is on, the ids of the documents with issues and the amount of documents added to the DB.

* A) The seed process is performed only once (the first time the server is started, after checking the existence of data in the DB, and if these do not exist the operation will start). 

* B) From this moment on, a cronjob will be in charge of updating the collection once a day, at 2am Spanish time.

### Incorrect data: ### 
In the case of broken images, a placeholder is created with the first letter of the member's name (inspired by Apple's contacts in iOS). For the rest of the incorrect data I decided to filter each member ID (console) to take care of them and fix the problems (if necessary).

### Extra: ###
#### * The results are automatically loaded thanks to an infinite scroll (inspired by Facebook feeds, instagram, etc.). ####
#### * Client and the server side made from scratch, using a service on the client side to call the endpoint from the backend. ####


## Tools / technologies:

* Node
* React
* Express
* MongoDb
* Cors
* Dotenv
* Http
* Mongoose
* Node-cron
* Node-fetch
* Sass
* React Router
* Preloading
* Infinite scroll

## License
[MIT](https://choosealicense.com/licenses/mit/)