'use strict';

// [START all]
// [START import]
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.

// The Firebase Admin SDK to access the Firestore Database.
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
// [END import]

// [START addMessage]
// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:documentId/original
// [START addMessageTrigger]
exports.postForm = functions.https.onRequest((req, res) => {
// [END addMessageTrigger]
  // Grab the text parameter.
  const original = req.body;
  // [START adminSdkAdd]
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  return admin.firestore().collection('messages').add(original).then((writeResult) => {
    // Send back a message that we've succesfully written the message
    return res.json({result: `Form with ID: ${writeResult.id} added.`});
  });
  // [END adminSdkAdd]
});
// [END addMessage]
