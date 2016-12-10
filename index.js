/**
 * Created by phanthilasaengthong on 12/9/2016 AD.
 */
var express = require('express'),
    app=express(),
        server = require('http').createServer(app),
    io = require('socket.io').listen(server);

  server.listen(8000);

  // app.get('/',function (req,res) {
  //     res.sendfile(__dirname+ '/index.html');
  // });
  app.use(express.static(__dirname + '/'));

var firebase = require("firebase");


// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "AIzaSyA_rWI-uQ5JyTo2QVUJb2ReO3j1B8hAriU",
    authDomain: "b2sthinkspace-dcda8.firebaseapp.com",
    databaseURL: "https://b2sthinkspace-dcda8.firebaseio.com",
    storageBucket: "b2sthinkspace-dcda8.appspot.com",
};
firebase.initializeApp(config);
var database = firebase.database();
// firebase.database().ref('users/' + "Test").set({
//         username: "test",
//         email: "test",
//     });
//firebase.auth().createUserWithEmailAndPassword("bo@hotmail.com","Boss12345");

// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//         // User is signed in.
//         console.log("eiei");
//     } else {
//         console.log("99999990000");
//         // No user is signed in.
//     }
// });

    io.sockets.on('connection',function (socket) {
    socket.on('login',function(data){
        console.log(data);
        // firebase.auth().createUserWithEmailAndPassword(data);
    });

});