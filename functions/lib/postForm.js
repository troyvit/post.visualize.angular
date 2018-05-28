exports.handler = (req, res) => {
    // [END addMessageTrigger]
    // Grab the text parameter.
    const original = req.body;
    // [START adminSdkAdd]
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    return exports.admin.firestore().collection('messages').add(original).then((writeResult) => {
        // Send back a message that we've succesfully written the message
        return res.json({ result: `Form with ID: ${writeResult.id} added.` });
    });
    // [END adminSdkAdd]
};
//# sourceMappingURL=postForm.js.map