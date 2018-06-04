'use strict';
// [START All]

// [START Imports]
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
// The Firebase Admin SDK to access the Firestore Database.
import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'
import * as post_form from './post_form'
import * as emails from './emails'

// singleton initialization
admin.initializeApp();


exports.postForm = functions.https.onRequest((req, res) => post_form.handler)

exports.sendUpdateEmail = functions.https.onRequest((req, res) => emails.monthlyUpdate())

// function sendAllUsers() {
// // List batch of users, 1000 at a time.
// admin.auth().listUsers(1000)
//   .then(function(listUsersResult) {
//     listUsersResult.users.forEach(function(userRecord) {
//       emails.sendUpdateEmail(userRecord.email, userRecord.displayName);;
//     });
//   })
//   .catch(function(error) {
//     console.log("Error listing users:", error);
//   });
// }
