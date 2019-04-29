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

// Client and Server Data Fetching Logic

// Import the Firebase base SDK.
const firebase = require("firebase/app");
// Load the Firebase database module.
// Here you should load all modules of Firebase that you need.
require("firebase/database");
require("firebase/storage");
// var admin = require("firebase-admin");
// const { Storage } = require("@google-cloud/storage");
// // var gcloud = require("google-cloud");
// const storage = new Storage();
// var gcs = gcloud.storage({
//   projectId: "d33d65954b30dd2cf79dcb8767b6748a79828ec9",
//   keyFilename: "./Interface Aesthetics-storage.json"
// });
// We initialize Firebase using a client-side config.
const firebaseConfig = require("./firebase-config.json").result;
(firebase.default || firebase).initializeApp(firebaseConfig);
// var serviceAccount = require("./Interface Aesthetics-storage.json");
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   storageBucket: "interface-aesthetics.appspot.com"
// });

// var bucket = admin.storage().bucket();

// var storageRef = firebase.storage().bucket();
// var bucket = storage.bucket("interface-aesthetics.appspot.com");

// async function uploadImage(name, localFilename) {
//   bucket.upload(localFilename, function(err, file) {
//     if (!err) {
//       console.log("somefile-inThisCaseASong.mp3 is now in your bucket.");
//     } else {
//       console.log("Error uploading file: " + err);
//     }
//   });
// }
// async function uploadImage(name, file) {
//   var imageRef = storageRef.child(name);
//   imageRef.putString(file, "base64").then(snapshot => {
//     return snapshot;
//   });
// }
async function getAllCourses() {
  const snap = await firebase
    .database()
    .ref("/courses")
    .orderByChild("level")
    .once("value");
  return snap.val();
}

async function updateCourses(courses) {
  firebase
    .database()
    .ref("/courses")
    .set(courses);
}

async function getBlog() {
  const snap = await firebase
    .database()
    .ref("/blog")
    .orderByChild("level")
    .once("value");
  return snap.val();
}

function writeBlogArticle({ id, title, text, image = "" }) {
  var postData = {
    id,
    title,
    text,
    image
  };
  var newArticleKey = firebase
    .database()
    .ref()
    .child("blog")
    .push().key;
  var updates = {};
  updates["/blog/" + newArticleKey] = postData;
  return firebase
    .database()
    .ref()
    .update(updates);
}

module.exports = {
  getAllCourses,
  updateCourses,
  writeBlogArticle,
  getBlog
};
