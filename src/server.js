const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ReactDOMServer = require('react-dom').ReactDOMServer;
const StaticRouter = require('react-router').StaticRouter;
// const App = require('../src/containers/App');

MongoClient.connect('mongodb://localhost:27017/hogwarts', (err, db) => {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  db.close();
});

const app = express();
const apiRouter = express.Router();

app.use(bodyParser.json());
app.use('/api', apiRouter);

apiRouter.get('/auth', (req, res) => {
  res.json({ user: 'edward' });
});

apiRouter.post('/login', (req, res) => {
  res.json({ login: 'edward' });
});

// app.get('/', (req, res) => {
//   const context = {};
//   const html = ReactDOMServer.renderToString(
//     <StaticRouter
//       location={req.url}
//       context={context}
//     >
//       <App />
//     </StaticRouter>
//   );
  
//   if (context.url) {
//     res.writeHead(301, {
//       Location: context.url
//     })
//     res.end()
//   } else {
//     res.write(`
//       <!doctype html>
//       <div id="app">${html}</div>
//     `)
//     res.end()
//   }
// });

app.listen(3000, () => console.log('3000'));
