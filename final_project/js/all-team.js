function all_team() {
  var database = firebase.database();
  var teamRef = firebase.database().ref("teams");
  var teamNum = 0;
  var teamIndex = 0;

  var $row = $("#class-row");
  var $button = $("#test");
  function begin() {}
  function test() {
    console.log("press");
    teamRef.push({ number: "30679", name: "bowei", project: "fuck_me" });
  }

  teamRef.child("teamNum").on("value", function(snapshot) {
    teamNum = snapshot.numChildren();
  });

  teamRef.limitToLast(10).on("child_added", function(snapshot) {
    alert("test");
    var data = snapshot.val();
    var name = data.name;
    var project = data.project;
    var number = data.number;
    var $newBoad = $("<div></div>");
    $newBoad.addClass("shadow-lg");
    // $newBoad.css("background-color", "white");
    //  $newBoads $newBoad.assign($newBoad.style, "bord");

    var $groupNum = $("<div></div>");
    $groupNum.addClass("group-num");
    var $groupNumData = $("<font></font>");
    $groupNumData.face = "Noto Sans TC";
    $groupNumData.text("team2");
    $groupNum.append($groupNumData);
    $newBoad.append($groupNum);

    var $pic = $("<div></div>");
    $pic.addClass("pic");
    var $pic_data = $("<img>");
    $pic_data.addClass("rounded-circle");
    $pic_data.attr("src", "../img/int.jpg");
    // $pic_data.src = "../img/int.jpg ";
    $pic.append($pic_data);
    $newBoad.append($pic);

    var $imformation = $("<div></div>");
    $imformation.addClass("imformation");
    var $member_child = $("<div></div>");
    $member_child.addClass("member-child");
    var $student_num = $("<p></p>");
    $student_num.css("margin-bottom", "0px");
    $student_num.css("height", "20px");
    $student_num.text(number);
    var $student_name = $("<p></p>");
    $student_name.css("margin-bottom", "0px");
    $student_name.css("height", "28px");
    $student_name.text(name);

    $member_child.append($student_num);
    $member_child.append($student_name);
    var $project_name = $("<p></p>");
    $project_name.text(project);
    var $demo1 = $("<i></i>");
    var $demo2 = $("<i></i>");
    $demo1.css("flex", "1");
    $demo1.text("Demo1:A+");
    $demo2.css("flex", "1");
    $demo2.text("Demo2:B+");
    var $rateMe = $("<span></span>");
    var $star_1 = $("<i></i>");
    $star_1.attr("id", "a");
    $star_1.attr("data-index", "0");
    $star_1.attr("data-toggle", "popover");
    $star_1.attr("data-html", "true");
    $star_1.attr("data-placement", "top");
    $star_1.attr("title", "vary bad");
    $star_1.addClass(`fas fa-star py-2 px-1 rate-popover ${number}`);
    var $star_2 = $("<i></i>");
    $star_2.attr("data-index", "1");
    $star_2.attr("data-toggle", "popover");
    $star_2.attr("data-placement", "top");
    $star_2.attr("title", "vary bad");
    $star_2.addClass(`fas fa-star py-2 px-1 rate-popover ${number}`);
    var $star_3 = $("<i></i>");
    $star_3.attr("data-index", "2");
    $star_3.attr("data-toggle", "popover");
    $star_3.attr("data-placement", "top");
    $star_3.attr("title", "vary bad");
    $star_3.addClass(`fas fa-star py-2 px-1 rate-popover ${number}`);
    var $star_4 = $("<i></i>");
    $star_4.attr("data-index", "3");
    $star_4.attr("data-toggle", "popover");
    $star_4.attr("data-placement", "top");
    $star_4.attr("title", "vary bad");
    $star_4.addClass(`fas fa-star py-2 px-1 rate-popover ${number}`);
    var $star_5 = $("<i></i>");
    $star_5.attr("data-index", "4");
    $star_5.attr("data-toggle", "popover");
    $star_5.attr("data-placement", "top");
    $star_5.attr("title", "vary bad");
    $star_5.addClass(`fas fa-star py-2 px-1 rate-popover ${number}`);
    $rateMe.append($star_1);
    $rateMe.append($star_2);
    $rateMe.append($star_3);
    $rateMe.append($star_4);
    $rateMe.append($star_5);
    $imformation.append($member_child);
    $imformation.append($project_name);
    $imformation.append($demo1);
    $imformation.append($demo2);
    $imformation.append($rateMe);
    $newBoad.append($imformation);
    var $team = $("<div></div>");
    $team.addClass("col-sm-12  col-lg-4 team");

    $team.id = "team" + ++teamIndex;

    $team.append($newBoad);
    $row.append($team);
    var myDefaultWhiteList = $.fn.tooltip.Constructor.Default.whiteList;
    myDefaultWhiteList.textarea = [];
    myDefaultWhiteList.button = [];
    var $stars = $(`.${number}`);
    // console.log($stars);
    $stars.on("mouseover", function() {
      var index = $(this).attr("data-index");
      markStarsAsActive(index);
    });

    function markStarsAsActive(index) {
      unmarkActive();
      for (var i = 0; i <= index; i++) {
        $($stars.get(i)).addClass("amber-text");
      }
    }

    function unmarkActive() {
      $stars.removeClass("amber-text");
    }

    $stars.on("click", function() {
      $stars.popover("hide");
    });

    // Submit, you can add some extra custom code here
    // ex. to send the information to the server
    $("#rateMe").on("click", "#voteSubmitButton", function() {
      $stars.popover("hide");
    });

    // Cancel, just close the popover
    $("#rateMe").on("click", "#closePopoverButton", function() {
      $stars.popover("hide");
    });
  });
}
