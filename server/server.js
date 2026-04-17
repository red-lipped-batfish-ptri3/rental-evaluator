//basic imports
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { URL, URLSearchParams } = require('url');
const { getRoutes } = require('get-routes');
//direct controller imports
const sessionController = require('./controllers/sessionController');
const cookieController = require('./controllers/cookieController');
const config = require("../config.js")
//route imports
const signupRouter = require('./routes/signupRoute');
const signinRouter = require('./routes/signinRoute');
const properties = require('./routes/properties');
const addFavsRouter = require('./routes/addFavsRoute');
const getFavsRouter = require('./routes/getFavsRoute');

const uri = config.default.uri

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true, useNewUrlParser: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);


app.use(cors());
app.use(express.json());
app.use(cookieParser());

// server test route
app.use('/testRoute', (req, res) => {
  //test stuff here
  res.send("helo world");
});

//signup route
app.use('/register', signupRouter);

//signin route
app.use('/signin', signinRouter);

//properties route
app.use('/properties', properties);

//add favorites route
app.use('/addFav', addFavsRouter);

//get favorites route
app.use('/getFavs', getFavsRouter);

//check login route
app.use('/checkLogin', sessionController.isLoggedIn, (req, res) => {
  return res.status(299).send('user is logged in');
});

//serve index.html - NOTE - THIS ROUTE NEVER ACTUALLY HITS (react router serves up the page??)
app.get('/', cookieController.setCookie, (req, res) => {
  return res.status(201).sendFile(path.join(__dirname, '.././index.html'));
});

// print all routes
// const routes = getRoutes(app);

// console.log('#### routes ##### ');
// console.log(routes);
// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error.',
    status: 400,
    message: { err: 'An unknown error occurred.' },
  };
  console.log("Error ", err)
  Object.assign(defaultErr, err);
  console.log(defaultErr.log);
  return res.status(defaultErr.status).json(defaultErr.message);
});

//listen on 3000
app.listen(3000, () => {
  console.log('Server listening on PORT 3000');
});
