function storedata() {
  var commentElement = document.getElementById("teacher_comment");
  var comment = commentElement.value;
  firebase
    .database()
    .ref("COMMENT/")
    .set({
      comment: comment
    });
}
function deletedata() {
  var commentElement = document.getElementById("teacher_comment");
  commentElement.value = "";
  firebase
    .database()
    .ref("/COMMENT")
    .remove();
}
const adminUID = "44WywTmzjCQAWukvAYdEwev7tX62";

firebase.auth().onAuthStateChanged(function(user) {
  alert(firebase.auth().currentUser.uid);
  if (adminUID != firebase.auth().currentUser.uid) {
    $("#storebtn").addClass("comment_btdisplay");
    $("#deletebtn").addClass("comment_btdisplay");
    $("#teacher_comment").attr("disabled", true);
  }
});
