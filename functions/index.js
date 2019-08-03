const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

const writeNot = not =>
    admin
        .firestore()
        .collection("notification")
        .add(not);

exports.not = functions.firestore
    .document("project/{id}")
    .onCreate((snap) => {
        const project = snap.data(),
            not = {
                title: project.title,
                time: admin.firestore.FieldValue.serverTimestamp(),
                user:project.user,
                type:'add'                
            };
        writeNot(not);
    });
