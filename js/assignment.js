

var assignmentData = [
    {
        timeStamp: '1591158000000',
        name: 'Emily Wang',
        chapter: 'Chapter Assignment 2',
        subject: 'HTML&CSS',
        title: 'Please check this file for me, thanks!', avatar: 'https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80',
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
    },
    {
        timeStamp: '1591086600000',
        name: 'David Xu',
        chapter: 'Chapter Assignment 1',
        subject: 'RWD',
        title: 'My Homework',
        avatar: 'https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=815&q=80',
        file: 'HW-David.zip',
        discuss: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, impedit dolorum consequuntur, rem alias id dolorem, doloremque nesciunt provident illum temporibus nam. Expedita aliquam ullam voluptatum, eveniet suscipit ipsum vel!',
        reply: {
            replied: false,
        }
    },
    {

        timeStamp: '1591032000000',
        name: 'Tony Wei',
        chapter: 'Final Assignment',
        subject: 'FINAL TEST',
        title: 'Have a problem with this Homework',
        avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
        file: 'HW-Final .zip',
        discuss: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus atque similique ea porro. Fugiat perferendis aperiam iure officiis quas, sit quam nemo pariatur! Blanditiis at laborum cum repellendus vitae nisi facere quae!?',
        reply: {
            replied: false,
        }
    },
    {

        timeStamp: '1591005000000',
        name: 'Christina Lin',
        chapter: 'Final Assignment',
        subject: 'FINAL TEST',
        title: 'Did I do it right?',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        file: 'HW.zip',
        discuss: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est animi corporis debitis vero soluta quasi deserunt? Quod quia voluptate, quam porro officiis sint magni sed quo quasi quaerat ratione dolore labore? Atque quibusdam autem est.',
        reply: {
            replied: false,
        }
    },
]


function loadAssignmentData() {
    //print資料
    let str = "";
    let timeNow = new Date();
    $('#assignmentList').html('');
    for (let i = 0; i < assignmentData.length; i++) {

        let timeGap = timeNow.getTime() - assignmentData[i].timeStamp //計算與現在的時間差
        let integer = Math.floor(timeGap / (24 * 3600 * 1000))  //計算差距天數
        let remainder = timeGap % (24 * 3600 * 1000)    //計算天數後剩餘的毫秒數
        let hours = Math.floor(remainder / (3600 * 1000)) //剩餘的毫秒數轉換小時
        let time = ''
        if (integer <= 0) {
            if (hours <= 1) {
                time = hours + 'hr ago'
            } else {
                time = hours + 'hrs ago'
            }
        } else {
            if (integer <= 1) {
                time = integer + 'day ' + hours + 'hrs ago'
            } else {
                time = integer + 'days ' + hours + 'hrs ago'
            }
        }

        str += `<li data-timeStamp="${assignmentData[i].timeStamp}"><div class="d-flex
        justify-content-between align-items-center mb-1 ">
    <div class="chapter fonst-075">${assignmentData[i].chapter}</div>
    <div class="duration fonst-075">${time}</div></div>
    <div class="d-flex justify-content-between align-items-center">
    <div class="listT font-weight-bold ellipsis">${assignmentData[i].title}</div>
    <div class="author dark2-color fonst-075">${assignmentData[i].name}</div></div></li>`
    }
    $('#assignmentList').html(str);
    // 預設第一個加入active樣式
    $('#assignmentList li:first-child').addClass('active');
}

function addArtical() {
    let $default = $('#assignmentList li.active')
    // 提問輸入
    let timeNow = new Date();
    let timeStamp = $default.data('timestamp');
    let subject = ''
    let student = ''

    $('#assignmentSubject .subject').html(subject)
    $('#assignmentSubject .student').html(student)

    for (let i = 0; i < assignmentData.length; i++) {
        let timeGap = timeNow.getTime() - assignmentData[i].timeStamp //計算與現在的時間差
        let integer = Math.floor(timeGap / (24 * 3600 * 1000))  //計算差距天數
        let remainder = timeGap % (24 * 3600 * 1000)    //計算天數後剩餘的毫秒數
        let hours = Math.floor(remainder / (3600 * 1000)) //剩餘的毫秒數轉換小時
        let time = ''
        if (integer <= 0) {
            if (hours <= 1) {
                time = hours + 'hr ago'
            } else {
                time = hours + 'hrs ago'
            }
        } else {
            if (integer <= 1) {
                time = integer + 'day ' + hours + 'hrs ago'
            } else {
                time = integer + 'days ' + hours + 'hrs ago'
            }
        }
        let hrStamp = new Date(timeStamp).getHours()
        let minStamp = new Date(timeStamp).getMinutes()

        if (timeStamp == assignmentData[i].timeStamp) {

            subject = `<div class="chapter fonst-075 mb-1">${assignmentData[i].chapter}<span>${assignmentData[i].subject}</span></div><div class="articleT font-weight-bold">${assignmentData[i].title}</div>`
            student = ` <img class="avatar mr-2" src="${assignmentData[i].avatar}">
              <div>
                <div class="name font-weight-bold mb-05">${assignmentData[i].name}</div>
                <div class="time fonst-075 dark2-color mb-3">${hrStamp}:${minStamp}<span class="ml-2">${time}</span></div>
                <div class="discuss fonst-075">${assignmentData[i].discuss}</div>
                <div class="fileList d-flex f-wrap my-3">
                  <a href="#" class="file px-2 py-1 d-flex align-items-center mr-1"><i
                      class="material-icons">attach_file</i>${assignmentData[i].file}</a></div>`
        }
    }
    $('#assignmentSubject .subject').html(subject)
    $('#assignmentSubject .student').html(student)

}
function addReply() {
    let $default = $('#assignmentList li.active')
    let timeNow = new Date();
    let timeStamp = $default.data('timestamp');

    let reply = ''
    $('#assignmentSubject .reply').html(reply)

    for (let i = 0; i < assignmentData.length; i++) {

        if (timeStamp == assignmentData[i].timeStamp && assignmentData[i].reply.replied == true) {

            // 回復輸入            
            let timeRe = parseInt(assignmentData[i].reply.timeStamp)
            let timeGap = timeNow.getTime() - timeRe //計算與現在的時間差
            let integer = Math.floor(timeGap / (24 * 3600 * 1000))  //計算差距天數
            let remainder = timeGap % (24 * 3600 * 1000)    //計算天數後剩餘的毫秒數
            let hours = Math.floor(remainder / (3600 * 1000)) //剩餘的毫秒數轉換小時
            let time = ''
            if (integer <= 0) {
                if (hours <= 1) {
                    time = hours + 'hr ago'
                } else {
                    time = hours + 'hrs ago'
                }
            } else {
                if (integer <= 1) {
                    time = integer + 'day ' + hours + 'hrs ago'
                } else {
                    time = integer + 'days ' + hours + 'hrs ago'
                }
            }
            let hrStamp = new Date(timeRe).getHours()
            let minStamp = new Date(timeRe).getMinutes()
            console.log(timeRe)
            reply += `<img class="avatar mr-2" src="${assignmentData[i].reply.avatar}">
            <div> <div class="editBox"><i class="material-icons mr-3">grade</i> <i class="material-icons">edit</i>
          </div><div class="name font-weight-bold mb-05 admin">${assignmentData[i].reply.name}</div>
        <div class="time fonst-075 dark2-color mb-3">${hrStamp}:${minStamp} <span>${time}</span></div>
        <div class="discuss fonst-075">${assignmentData[i].reply.discuss}</div></div>
        </div></div>`
            console.log(assignmentData[i].name)
        }
        $('#assignmentSubject .reply').html(reply)
    }
}
function replyCancel() {  e.prevent.Default();
    $('.editArea').removeClass('active');
    $('.reply').css('height', 'auto');
    $('.editArea textarea').val('');
}


$(document).ready(function () {
    loadAssignmentData();
    addArtical();
    addReply()

    $('#assignmentList li').click(function () {  e.prevent.Default();
        $(this).addClass('active');
        $(this).siblings('li').removeClass('active');
        addArtical();
        addReply();
        replyCancel()
    })
    $('#replyAction').click(function () {
        $('.editArea').addClass('active');
        $('.reply').css('height', '200');
    })
    $('#replyCancel').click(function () {
        e.prevent.Default();
        replyCancel();
    })
})

