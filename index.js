// const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require("firebase-functions");
const app = require("express")();
const firebaseConfig = require("./utils/config");
const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);// Initializing Firebase
const {login, kycUserCreate} = require("./handlers/auth");

app.post("/login", login);
app.post("/kyc/user/create", kycUserCreate);

exports.api = functions.https.onRequest(app);
