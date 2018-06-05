#Testing Functions Locally

To test functions locally, which provides quicker test times, you can use the google cloud functions emulator that comes with firebase-tools. [See here for a complete guide](https://firebase.google.com/docs/functions/local-emulator). In brief, you need to download secret keys from firebase with this command: `firebase functions:config:get > .runtimeconfig.json` Afterwards, you should be able to run `firebase functions:shell` and within the shell, run `myFunction()` to test your function. Look at the linked guide to see how to call and pass data.
