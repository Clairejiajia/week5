var memberData = [
    {
        id: 'member1',
        name: 'Emir Wicks',
        email: 'emir.wicks@mail.com',
        veri: true,
        accessLevel: 'vip',
        img:'https://images.unsplash.com/photo-1522069394066-326005dc26b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },
    {
        id: 'member2',
        name: 'Zaina Goldsmith',
        email: 'zaina.goldsmith@mail.com',
        veri: true,
        accessLevel: 'normal',
        img:'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    }, {
        id: 'member3',
        name: 'Mahima Lopez',
        email: 'Mahima.Lopez@mail.com',
        veri: true, 
        accessLevel: 'normal',
        img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    },
    {
        id: 'member4',
        name: 'Pharrell Murray',
        email: 'Pharrell.Murray@mail.com',
        veri: true, 
        accessLevel: 'normal',
        img:'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
        
    },
    {
        id: 'member5',
        name: 'Annika Mcbride',
        email: 'Annika.Mcbride@mail.com',
        veri: true, 
        accessLevel: 'normal',
        img:'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    {
        id: 'member6',
        name: 'Fatimah Clark',
        email: 'Fatimah.Clark@mail.com',
        veri: true, 
        accessLevel: 'normal',
        img:'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=698&q=80'
    },
    {
        id: 'member7',
        name: 'Klaudia Rhodes',
        email: 'Klaudia.Rhodes@mail.com',
        veri: true, 
        accessLevel: 'normal',
        img:'https://images.unsplash.com/photo-1560365163-3e8d64e762ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
    },
    {
        id: 'member8',
        name: 'Tillie Lucero',
        email: 'Tillie.Lucero@mail.com',
        veri: true, accessLevel: 'normal',
        img:'https://images.unsplash.com/photo-1525103691634-22b8f578a199?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
    },
    {
        id: 'member9',
        name: 'Sabrina Stephenson',
        email: 'Sabrina.Stephenson@mail.com',
        veri: true, accessLevel: 'normal',
        img:'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80'
    },
    {
        id: 'member10',
        name: 'Annie Smith',
        email: 'Annie.Smith@mail.com',
        veri: true, accessLevel: 'normal',
        img:'https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=630&q=80'
    },
    {
        id: 'member11',
        name: 'Andy Chen',
        email: 'andy.chen@mail.com',
        veri: false, accessLevel: 'admin',
        img:'https://images.unsplash.com/photo-1514794749374-fb67509dbb7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80'
    },
]

function loadData() {
    //print admin資料 
    let str = "";
    $('#member').html('');
    for (let i = 0; i < memberData.length; i++) {
        let veriResult = '';
        let idShow = memberData[i].id.substring(6)
        if (memberData[i].veri == true) {
            veriResult = 'Yes'
        } else {
            veriResult = 'No'
        }
        str += 
        `<li id="${ memberData[i].id }"class="d-flex align-items-center"><div class="id">#${idShow}
        </div><div class="name">${memberData[i].name} 
        </div><div class="email">${memberData[i].email}
        </div><div class="veri">${veriResult}
        </div><div class="icon"><a href="#" data-toggle="modal" data-target="#previewData"><i class="material-icons preview">visibility</i></a></div><div class="icon"><a href="#" data-toggle="modal" data-target="#editAdmin"><i class="material-icons edit">edit</i></a></li>`
        
    }
    $('#member').html(str);
}
$(document).ready(function(){
   
    // 編輯資料
    $('.edit').click(function () {
        let targetID = $(this).parents('.d-flex').attr('id');
       
        for (let i = 0; i < memberData.length; i++) {
           
            if (targetID == memberData[i].id) {           
                $('#editName').val(memberData[i].name)
                $('#editEmail').val(memberData[i].email)
                $('#accessLevel-sel').val(memberData[i].accessLevel)
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
    })
    // 預覽資料
    $('.preview').click(function () {
        let targetID = $(this).parents('.d-flex').attr('id');
    
        for (let i = 0; i < memberData.length; i++) {
            let idShow = memberData[i].id.substring(6)
            if (targetID == memberData[i].id) {
          
                $('#previewData .adminImg').css("background-image","url("+memberData[i].img+")")
                $('#previewData .id').text('#'+idShow)
                $('#previewData .name').text(memberData[i].name)
                $('#previewData .email').text(memberData[i].email)
                $('#previewData .adminLevel').text(memberData[i].accessLevel)
                if (memberData[i].veri == true) {                
                    $('#previewData .veri').text('Verified')                   
                } else {
                    $('#previewData .veri').text('Unverified')                   
             }               
            }
        }
    })
})
    



loadData();


