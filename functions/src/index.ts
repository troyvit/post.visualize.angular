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

exports.sendAllUsersMonthlyUpdate = functions.https.onRequest((req, res) => emails.sendAllUsersMonthlyUpdate())
exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => emails.welcomEmail(user))
