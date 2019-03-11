/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const window = require("global/window");
const functions = require("firebase-functions");
const app = require("express")();
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const bodyParser = require("body-parser");
const cors = require("cors");
const graphqlHTTP = require("express-graphql");
const gqlServerConfig = require("./api");
const firebase = require("firebase");
const { makeExecutableSchema } = require("graphql-tools");

if (process.env.NODE_ENV === "development") {
  require("dotenv").config({ path: "development.env" });
}
// React App
const ServerApp = React.createFactory(
  require("./build/server.bundle.js").default
);
const template = require("./template");

// Server-side Data Loading
const database = require("./firebase-database");

const fs = require("fs");

var jsonParser = bodyParser.json({
  limit: 1024 * 1024 * 2000,
  type: "application/json"
});

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
const schema = makeExecutableSchema(gqlServerConfig);

app.use("/graphql", (req, res) => {
  graphqlHTTP({
    schema,
    graphiql: true,
    context: { firebase }
  })(req, res);
});
// Helper function to get the markup from React, inject the initial state, and
// send the server-side markup to the client
const renderApplication = (url, res, initialState) => {
  const html = ReactDOMServer.renderToString(
    ServerApp({ url: url, context: {}, initialState })
  );
  const templatedHtml = template({
    body: html,
    initialState: JSON.stringify(initialState)
  });
  res.send(templatedHtml);
};

app.use(jsonParser);
app.use((req, res, next) => {
  //  res.header("Access-Control-Allow-Origin", "https://kidappi.herokuapp.com");
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  next();
});

app.get("/favicon.ico", (req, res) => {
  res.send(204);
});

app.get("/*", async (req, res) => {
  res.set("Cache-Control", "public, max-age=60, s-maxage=180");
  renderApplication(req.url, res);
});
app.post("/upload", (req, res, next) => {
  User.updateOne({ _id: req.body.id }, { avatar: req.body.file }).exec();
  res.send(200);
  next();
});

app.post("/uploadCourseImage", (req, res, next) => {
  const extension = path.extname(req.body.imageName);
  console.log(extension);
  const guid = uuid();
  fs.writeFile(`/tmp/${guid}${extension}`, req.body.image, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });

  Course.updateOne(
    { _id: req.body._id },
    { image: `${guid}${extension}` }
  ).exec();
  res.send(`${guid}${extension}`);
  next();
});

app.get("/getCourseImage", (req, res, next) => {
  console.log("request", req.query.image);

  fs.readFile(`/tmp/${req.query.image}`, "utf8", (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
// app.get("/:userId?", async (req, res) => {
//   res.set("Cache-Control", "public, max-age=60, s-maxage=180");
//   if (req.params.userId) {
//     // client is requesting user-details page with userId
//     // load the data for that employee and its direct reports
//     const resp = await database.getEmployeeById(req.params.userId);
//     renderApplication(req.url, res, resp);
//   } else {
//     // index page. load data for all employees
//     const resp = await database.getAllEmployees();
//     renderApplication(req.url, res, resp);
//   }
// });

exports.app = functions.https.onRequest(app);
