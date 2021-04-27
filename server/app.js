require ('dotenv').config();
let express = require('express');
const db = require ("./db");
let app = express();
let sequilize = require('/.db')

let user = require('./controllers/usercontroller');
let product = require('./controllers/productcontroller');
let review = require('./controllers/reviewcontroller');

sequilize.sync();

app.use(require('./middleware/headers'));
app.use(express.json());

app.use('/user', user);
app.use('/product', product);
app.use('/reivew', review);

db.authenticate()
  .then(() => db.sync())
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`[Server: ] App is listening on Port ${process.env.PORT}`)
    );
  })
  .catch((err) => {
    console.log("[Server:] Server Crashed");
    console.log(err);
  });


