#Testing Functions Locally

## Getting FirebaseConfig Variables Setup Locally

To test functions locally, which provides quicker test times, you can use the google cloud functions emulator that comes with firebase-tools. [See here for a complete guide](https://firebase.google.com/docs/functions/local-emulator). In brief, you need to download secret keys from firebase with this command: `firebase functions:config:get > .runtimeconfig.json` Afterwards, you should be able to run `firebase functions:shell` and within the shell, run `myFunction()` to test your function. Look at the linked guide to see how to call and pass data.

## Getting Auth to work Locally (Only use Development server!)

Additionally, to use the auth service, you need to download a service_account_key and put it into the functions directory, and name it post-visualize-development-key.json. Next, set it to an environment variable in your bashrc like this: `export GOOGLE_APPLICATION_CREDENTIALS="path/to/post-visualize-development-key.json"`. After that, you can run your application with full privileges.
