//document.write('<script src="progress.js"></script>');
$(document).ready(function() {
  var loginUser;
  var email;
  var password;
  //註冊帳號
  $("#btnSingUp").click(function() {
    email = document.getElementById("mail").value;
    password = document.getElementById("password").value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function() {
        //登入成功後，取得登入使用者資訊
        loginUser = firebase.auth().currentUser;
        console.log("登入使用者為", loginUser.email);
        firebase
          .database()
          .ref("users/" + loginUser.uid)
          .set({ email: loginUser.email })
          .then(function() {
            window.location.href = "progress.html";
          });
      })
      .catch(function(error) {
        console.error("寫入使用者資訊錯誤", error);
      });
  });

  //增加更新進度
  $("#submit").click(function() {
    const time = document.getElementById("time").value;
    var youtube = document.getElementById("youtube").value;
    const content = document.getElementById("content").value;
    youtube = youtube.replace("watch?v=", "embed/");
    loginUser = firebase.auth().currentUser;
    var progressRef = firebase.database().ref("users/" + loginUser.uid);
    progressRef
      .child("progress")
      .once("value")
      .then(function(snapshot) {
        var num = snapshot.numChildren();
        //console.log("There are " + num + " in progress");
        //console.log("progress資料", snapshot.val());
        progressRef
          .child("progress")
          .child((0 + Number(num)).toString())
          .set({ time: time, youtube: youtube, content: content })
          .then(function() {
            alert("成功!!");
            $("table").append(
              '<tr><td data-th="更新內容">' +
                content +
                '</td><td data-th="花費時間">' +
                time +
                '</td><td data-th="操作影片"><div class=".video-container"><iframe width="200" height="130"src=' +
                youtube +
                ' frameborder="0"allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe></div></td></tr>'
            );
          })
          .catch(function(error) {
            alert("失敗" + error);
          });
      })
      .catch(function(error) {
        alert("失敗" + error);
      });
  });

  firebase
    .database()
    .ref("users/" + firebase.auth().currentUser.uid)
    .child("progress")
    .on("value", function(snapshot) {
      console.log("progress資料", snapshot.val());
    });

  //登入
  $("#loginSmtBtn").click(function() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  });

  $("#signoutSmtBtn").click(function() {
    firebase
      .auth()
      .signOut()
      .then(
        function() {
          console.log("User sign out!");
        },
        function(error) {
          console.log("User sign out error!");
        }
      );
  }, false);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      loginUser = user;
      console.log("User is logined", user);
      //window.location.href = "progress.html";
    } else {
      loginUser = null;
      console.log("User is not logined yet.");
    }
  }, false);
});
