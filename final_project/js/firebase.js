$(document).ready(function() {
  var firebaseConfig = {
    apiKey: "AIzaSyAKgLJJd7pEkbdI-N01GatPk6TUv-IRTKo",
    authDomain: "final-d7f40.firebaseapp.com",
    databaseURL: "https://final-d7f40.firebaseio.com",
    projectId: "final-d7f40",
    storageBucket: "final-d7f40.appspot.com",
    messagingSenderId: "850921064492",
    appId: "1:850921064492:web:8dfefa78dadb0a8b"
  };

  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
});
