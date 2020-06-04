$(document).ready(function () {
  // 產品頁切換,sideBar切換
  let pathName = location.pathname;
  let pathNameArray = pathName.split("/")
  let len = pathNameArray.length;
  let target = pathNameArray[len - 1].substring(0,5);

  if (target == "#") {
    $('#index').addClass('active');
  } else {
    $('#'+target).addClass('active');
  }
})

var memberData = [{
  id: 'member1',
  name: 'Emir Wicks',
  email: 'emir.wicks@mail.com',
  veri: true,
  accessLevel: 'vip',
  img: 'https://images.unsplash.com/photo-1522069394066-326005dc26b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
}, {
  id: 'member2',
  name: 'Zaina Goldsmith',
  email: 'zaina.goldsmith@mail.com',
  veri: true,
  accessLevel: 'normal',
  img: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
}, {
  id: 'member3',
  name: 'Mahima Lopez',
  email: 'Mahima.Lopez@mail.com',
  veri: true,
  accessLevel: 'normal',
  img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
}, {
  id: 'member4',
  name: 'Pharrell Murray',
  email: 'Pharrell.Murray@mail.com',
  veri: true,
  accessLevel: 'normal',
  img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
}, {
  id: 'member5',
  name: 'Annika Mcbride',
  email: 'Annika.Mcbride@mail.com',
  veri: true,
  accessLevel: 'normal',
  img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
}, {
  id: 'member6',
  name: 'Fatimah Clark',
  email: 'Fatimah.Clark@mail.com',
  veri: true,
  accessLevel: 'normal',
  img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=698&q=80'
}, {
  id: 'member7',
  name: 'Klaudia Rhodes',
  email: 'Klaudia.Rhodes@mail.com',
  veri: true,
  accessLevel: 'normal',
  img: 'https://images.unsplash.com/photo-1560365163-3e8d64e762ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
}, {
  id: 'member8',
  name: 'Tillie Lucero',
  email: 'Tillie.Lucero@mail.com',
  veri: true,
  accessLevel: 'normal',
  img: 'https://images.unsplash.com/photo-1525103691634-22b8f578a199?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
}, {
  id: 'member9',
  name: 'Sabrina Stephenson',
  email: 'Sabrina.Stephenson@mail.com',
  veri: true,
  accessLevel: 'normal',
  img: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80'
}, {
  id: 'member10',
  name: 'Annie Smith',
  email: 'Annie.Smith@mail.com',
  veri: true,
  accessLevel: 'normal',
  img: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=630&q=80'
}, {
  id: 'member11',
  name: 'Andy Chen',
  email: 'andy.chen@mail.com',
  veri: false,
  accessLevel: 'admin',
  img: 'https://images.unsplash.com/photo-1514794749374-fb67509dbb7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80'
}];

function loadData() {
  //print admin資料 
  var str = "";
  $('#member').html('');

  for (var i = 0; i < memberData.length; i++) {
    var veriResult = '';
    var idShow = memberData[i].id.substring(6);

    if (memberData[i].veri == true) {
      veriResult = 'Yes';
    } else {
      veriResult = 'No';
    }

    str += "<li id=\"".concat(memberData[i].id, "\"class=\"d-flex align-items-center\"><div class=\"id\">#").concat(idShow, "\n        </div><div class=\"name\">").concat(memberData[i].name, " \n        </div><div class=\"email\">").concat(memberData[i].email, "\n        </div><div class=\"veri\">").concat(veriResult, "\n        </div><div class=\"icon\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#previewData\"><i class=\"material-icons preview\">visibility</i></a></div><div class=\"icon\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#editAdmin\"><i class=\"material-icons edit\">edit</i></a></li>");
  }

  $('#member').html(str);
}

$(document).ready(function () {
  // 編輯資料
  $('.edit').click(function () {
    var targetID = $(this).parents('.d-flex').attr('id');

    for (var i = 0; i < memberData.length; i++) {
      if (targetID == memberData[i].id) {
        $('#editName').val(memberData[i].name);
        $('#editEmail').val(memberData[i].email);
        $('#accessLevel-sel').val(memberData[i].accessLevel);

        if (memberData[i].veri == true) {
          $('#editAdmin .checkMsg.false').removeClass('active');
          $('#editAdmin .checkMsg.true').addClass('active');
          $('#editAdmin .veriBtn').attr('disabled', true);
        } else {
          $('#editAdmin .checkMsg.true').removeClass('active');
          $('#editAdmin .checkMsg.false').addClass('active');
        }
      }
    }
  }); // 預覽資料

  $('.preview').click(function () {
    var targetID = $(this).parents('.d-flex').attr('id');

    for (var i = 0; i < memberData.length; i++) {
      var idShow = memberData[i].id.substring(6);

      if (targetID == memberData[i].id) {
        $('#previewData .adminImg').css("background-image", "url(" + memberData[i].img + ")");
        $('#previewData .id').text('#' + idShow);
        $('#previewData .name').text(memberData[i].name);
        $('#previewData .email').text(memberData[i].email);
        $('#previewData .adminLevel').text(memberData[i].accessLevel);

        if (memberData[i].veri == true) {
          $('#previewData .veri').text('Verified');
        } else {
          $('#previewData .veri').text('Unverified');
        }
      }
    }
  });
});
loadData();
"use strict";

$(document).ready(function () {
  // 產品頁切換,sideBar切換
  var pathName = location.pathname; //取得目前子路徑

  var length = pathName.length; //取得子路徑字串長度

  var name = pathName.substring(1, length - 5); //取得目前路徑檔名

  var target = '#' + name;

  if (name == "/") {
    $('#index').addClass('active');
  } else {
    $(target).addClass('active');
  }
});
"use strict";

var assignmentData = [{
  timeStamp: '1591158000000',
  name: 'Emily Wang',
  chapter: 'Chapter Assignment 2',
  subject: 'HTML&CSS',
  title: 'Please check this file for me, thanks!',
  avatar: 'https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80',
  file: 'HW-Emily.zip',
  discuss: 'Hi Teacher, the attached file is my homework of chapter 2. And here comes a question: Why in the following code the height of the <span>div</span> is bigger than the height of the <span>img</span> ? There is a gap below the image, but it doesn’t seems to be a padding/margin.<br> What is the gap or extra space below image?',
  reply: {
    replied: true,
    timeStamp: '1591180756014',
    name: 'Andy Chen',
    accessLevel: 'admin',
    avatar: 'https://images.unsplash.com/photo-1514794749374-fb67509dbb7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80',
    discuss: 'Hi David, by default, an image is rendered inline, like a letter soitsits on the same line that a, b, c and d sit on.There is space below that line for the descenders you find on letterslike g, j, p and q.<br><br><br>You can:<br><br><ul><li>adjust the<span>vertical-align</span> of the image to position it elsewhere (e.g. the <span>middle</span> )or</li><li>change the <span>display</span> so it isn’t inline.</li></ul>'
  }
}, {
  timeStamp: '1591086600000',
  name: 'David Xu',
  chapter: 'Chapter Assignment 1',
  subject: 'RWD',
  title: 'My Homework',
  avatar: 'https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=815&q=80',
  file: 'HW-David.zip',
  discuss: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, impedit dolorum consequuntur, rem alias id dolorem, doloremque nesciunt provident illum temporibus nam. Expedita aliquam ullam voluptatum, eveniet suscipit ipsum vel!',
  reply: {
    replied: false
  }
}, {
  timeStamp: '1591032000000',
  name: 'Tony Wei',
  chapter: 'Final Assignment',
  subject: 'FINAL TEST',
  title: 'Have a problem with this Homework',
  avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
  file: 'HW-Final .zip',
  discuss: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus atque similique ea porro. Fugiat perferendis aperiam iure officiis quas, sit quam nemo pariatur! Blanditiis at laborum cum repellendus vitae nisi facere quae!?',
  reply: {
    replied: false
  }
}, {
  timeStamp: '1591005000000',
  name: 'Christina Lin',
  chapter: 'Final Assignment',
  subject: 'FINAL TEST',
  title: 'Did I do it right?',
  avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  file: 'HW.zip',
  discuss: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est animi corporis debitis vero soluta quasi deserunt? Quod quia voluptate, quam porro officiis sint magni sed quo quasi quaerat ratione dolore labore? Atque quibusdam autem est.',
  reply: {
    replied: false
  }
}];

function loadAssignmentData() {
  //print資料
  var str = "";
  var timeNow = new Date();
  $('#assignmentList').html('');

  for (var i = 0; i < assignmentData.length; i++) {
    var timeGap = timeNow.getTime() - assignmentData[i].timeStamp; //計算與現在的時間差

    var integer = Math.floor(timeGap / (24 * 3600 * 1000)); //計算差距天數

    var remainder = timeGap % (24 * 3600 * 1000); //計算天數後剩餘的毫秒數

    var hours = Math.floor(remainder / (3600 * 1000)); //剩餘的毫秒數轉換小時

    var time = '';

    if (integer <= 0) {
      if (hours <= 1) {
        time = hours + 'hr ago';
      } else {
        time = hours + 'hrs ago';
      }
    } else {
      if (integer <= 1) {
        time = integer + 'day ' + hours + 'hrs ago';
      } else {
        time = integer + 'days ' + hours + 'hrs ago';
      }
    }

    str += "<li data-timeStamp=\"".concat(assignmentData[i].timeStamp, "\"><div class=\"d-flex\n        justify-content-between align-items-center mb-1 \">\n    <div class=\"chapter fonst-075\">").concat(assignmentData[i].chapter, "</div>\n    <div class=\"duration fonst-075\">").concat(time, "</div></div>\n    <div class=\"d-flex justify-content-between align-items-center\">\n    <div class=\"listT font-weight-bold ellipsis\">").concat(assignmentData[i].title, "</div>\n    <div class=\"author dark2-color fonst-075\">").concat(assignmentData[i].name, "</div></div></li>");
  }

  $('#assignmentList').html(str); // 預設第一個加入active樣式

  $('#assignmentList li:first-child').addClass('active');
}

function addArtical() {
  var $default = $('#assignmentList li.active'); // 提問輸入

  var timeNow = new Date();
  var timeStamp = $default.data('timestamp');
  var subject = '';
  var student = '';
  $('#assignmentSubject .subject').html(subject);
  $('#assignmentSubject .student').html(student);

  for (var i = 0; i < assignmentData.length; i++) {
    var timeGap = timeNow.getTime() - assignmentData[i].timeStamp; //計算與現在的時間差

    var integer = Math.floor(timeGap / (24 * 3600 * 1000)); //計算差距天數

    var remainder = timeGap % (24 * 3600 * 1000); //計算天數後剩餘的毫秒數

    var hours = Math.floor(remainder / (3600 * 1000)); //剩餘的毫秒數轉換小時

    var time = '';

    if (integer <= 0) {
      if (hours <= 1) {
        time = hours + 'hr ago';
      } else {
        time = hours + 'hrs ago';
      }
    } else {
      if (integer <= 1) {
        time = integer + 'day ' + hours + 'hrs ago';
      } else {
        time = integer + 'days ' + hours + 'hrs ago';
      }
    }

    var hrStamp = new Date(timeStamp).getHours();
    var minStamp = new Date(timeStamp).getMinutes();

    if (timeStamp == assignmentData[i].timeStamp) {
      subject = "<div class=\"chapter fonst-075 mb-1\">".concat(assignmentData[i].chapter, "<span>").concat(assignmentData[i].subject, "</span></div><div class=\"articleT font-weight-bold\">").concat(assignmentData[i].title, "</div>");
      student = " <img class=\"avatar mr-2\" src=\"".concat(assignmentData[i].avatar, "\">\n              <div>\n                <div class=\"name font-weight-bold mb-05\">").concat(assignmentData[i].name, "</div>\n                <div class=\"time fonst-075 dark2-color mb-3\">").concat(hrStamp, ":").concat(minStamp, "<span class=\"ml-2\">").concat(time, "</span></div>\n                <div class=\"discuss fonst-075\">").concat(assignmentData[i].discuss, "</div>\n                <div class=\"fileList d-flex f-wrap my-3\">\n                  <a href=\"#\" class=\"file px-2 py-1 d-flex align-items-center mr-1\"><i\n                      class=\"material-icons\">attach_file</i>").concat(assignmentData[i].file, "</a></div>");
    }
  }

  $('#assignmentSubject .subject').html(subject);
  $('#assignmentSubject .student').html(student);
}

function addReply() {
  var $default = $('#assignmentList li.active');
  var timeNow = new Date();
  var timeStamp = $default.data('timestamp');
  var reply = '';
  $('#assignmentSubject .reply').html(reply);

  for (var i = 0; i < assignmentData.length; i++) {
    if (timeStamp == assignmentData[i].timeStamp && assignmentData[i].reply.replied == true) {
      // 回復輸入            
      var timeRe = parseInt(assignmentData[i].reply.timeStamp);
      var timeGap = timeNow.getTime() - timeRe; //計算與現在的時間差

      var integer = Math.floor(timeGap / (24 * 3600 * 1000)); //計算差距天數

      var remainder = timeGap % (24 * 3600 * 1000); //計算天數後剩餘的毫秒數

      var hours = Math.floor(remainder / (3600 * 1000)); //剩餘的毫秒數轉換小時

      var time = '';

      if (integer <= 0) {
        if (hours <= 1) {
          time = hours + 'hr ago';
        } else {
          time = hours + 'hrs ago';
        }
      } else {
        if (integer <= 1) {
          time = integer + 'day ' + hours + 'hrs ago';
        } else {
          time = integer + 'days ' + hours + 'hrs ago';
        }
      }

      var hrStamp = new Date(timeRe).getHours();
      var minStamp = new Date(timeRe).getMinutes();
      console.log(timeRe);
      reply += "<img class=\"avatar mr-2\" src=\"".concat(assignmentData[i].reply.avatar, "\">\n            <div> <div class=\"editBox\"><i class=\"material-icons mr-3\">grade</i> <i class=\"material-icons\">edit</i>\n          </div><div class=\"name font-weight-bold mb-05 admin\">").concat(assignmentData[i].reply.name, "</div>\n        <div class=\"time fonst-075 dark2-color mb-3\">").concat(hrStamp, ":").concat(minStamp, " <span>").concat(time, "</span></div>\n        <div class=\"discuss fonst-075\">").concat(assignmentData[i].reply.discuss, "</div></div>\n        </div></div>");
      console.log(assignmentData[i].name);
    }

    $('#assignmentSubject .reply').html(reply);
  }
}

function replyCancel() {
  $('.editArea').removeClass('active');
  $('.reply').css('height', 'auto');
  $('.editArea textarea').val('');
}

$(document).ready(function () {
  loadAssignmentData();
  addArtical();
  $('#assignmentList li').click(function () {
    $(this).addClass('active');
    $(this).siblings('li').removeClass('active');
    addArtical();
    addReply();
    replyCancel();
  });
  $('#replyAction').click(function () {
    $('.editArea').addClass('active');
    $('.reply').css('height', '200');
  });
  $('#replyCancel').click(function () {
    replyCancel();
  });
});