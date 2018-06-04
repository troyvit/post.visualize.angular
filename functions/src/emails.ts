const functions = require('firebase-functions');

const SENDGRID_API_KEY = functions.config().sendgrid.key;

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);

export function monthlyUpdate () {
  const msg = {
      to: "ethan.keller@gmail.com",
      from: 'post.aguaclara@gmail.com',
      subject:  'Hi!',
      // text: `Hey ${toName}. You have a new follower!!! `,
      // html: `<strong>Hey ${toName}. You have a new follower!!!</strong>`,

      // custom templates
      templateId: '524104c3-220e-4132-9765-ec57d5b6ad7b',
      substitutionWrappers: ['{{', '}}'],
      substitutions: {
        name: "Ethan"
        // and other custom properties here
      }
  };

  return sgMail.send(msg)
}
