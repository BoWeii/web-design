var database = firebase.database();
var dbref = firebase.database().ref("messageBoard");
var $messageField = $("#messageInput");
var $nameField = $("#nameInput");
var $messageList = $("#example-messages");
var $boards = $("#board0");
$("#messageInput").keypress(function(e) {
  console.log("press");
  if (e.keyCode == 13) {
    // var username = $nameField.val();
    var username = "Bowei";
    var message = $messageField.val();
    console.log(username);
    console.log(message);
    dbref.push({ name: username, text: message });
    $messageField.val("");
  }
});
dbref.limitToLast(10).on("child_added", function(snapshot) {
  var data = snapshot.val();
  var username = data.name || "anonymous";
  var message = data.text;

  var $messageElement = $("<ul></ul>");
  var $nameElement = $("<strong ></strong>");
  $messageElement.css("word-wrap", "break-word");

  var $space = $("#example-messages").clone();
  $space.css("padding-inline-start", "0px");
  $space.css("padding-inline-start", "0px");
  $space.css("display", "block");
  $messageElement.css("padding-inline-end", "20px");
  $messageElement.css("padding-inline-start", "20px");
  $space.addClass("shadow-lg");
  $space.css("max-width", "300px");
  $space.css("height", "auto");
  $space.css("margin-left", "20px");
  $space.css("margin-top", "20px");

  $nameElement.text(username + " : ");
  $messageElement.text(message).prepend($nameElement);
  $messageElement.css("height", "auto");
  $messageElement.css("width", "auto");
  $messageElement.css("flex-wrap", "wrap");
  $space.append($messageElement);
  if (username == "Bowei") {
    $space.insertAfter($boards, $space);
    // $boards.append($messageElement);
    $messageList[0].scrollTop = $messageList.scrollHeight;
  }
});
