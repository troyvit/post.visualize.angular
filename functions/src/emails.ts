import * as functions from 'firebase-functions';
import * as sgMail from '@sendgrid/mail';
import * as admin from 'firebase-admin';

const SENDGRID_API_KEY = functions.config().sendgrid.key;


sgMail.setApiKey(SENDGRID_API_KEY);

export function sendAllUsersMonthlyUpdate() {
// List batch of users, 1000 at a time.
admin.auth().listUsers(1000)
  .then(function(listUsersResult) {
    listUsersResult.users.forEach(function(userRecord) {
      monthlyUpdate(userRecord);
    });
  })
  .catch(function(error) {
    console.log("Error listing users:", error);
  });
}

export function monthlyUpdate (user: admin.auth.UserRecord) {
  // Get all user's email, and put them into a list:
  const msg = {
      to: user.email,
      from: 'updates@mail.aguaclarapost.org',
      subject:  'Hi!',
      //text: `Hey ${toName}. You have a new follower!!! `,
      // html: `<strong>Hey ${toName}. You have a new follower!!!</strong>`,

      // custom templates
      templateId: '524104c3-220e-4132-9765-ec57d5b6ad7b',
      substitutionWrappers: ['{{', '}}'],
      substitutions: {
        name: user.displayName
        // and other custom properties here
      }
  };
  return sgMail.send(msg)
}

export function welcomEmail (user: admin.auth.UserRecord) {
  // Get user's firestore entry:
  var em = user.email
  var dn = user.displayName
  let user_firestore = admin.firestore().doc('users/vzXRhbY0GieY1jeP4V76nG7FrMk2')
  user_firestore.get().then(user => {
    const msg = {
        to: em, //user.email,
        from: 'updates@mail.aguaclarapost.org',
        templateId: 'fce24c48-06c7-480e-922b-ec96676a6418',
        substitutionWrappers: ['{{', '}}'],
        substitutions: {
          name: dn //user.displayName
          // and other custom properties here
        }
    };
    return sgMail.send(msg)
  })
}
