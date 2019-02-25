$('#user-added').hide();
$('#user-not-added').hide();
$('#error').hide();
$('#user-removed').hide();

var checkTable = function(){
    if(document.getElementById("userstable").rows.length == 1){
        document.getElementById("user-table").innerText = "No enrolled users"
    }
}

$(document).ready(function () {
    $('#storeuser').on("click", function(e) {
        $.ajax({
            url: 'http://localhost:8762/ks-userservice/add-user',
            method: "POST",
            headers: {
                'token': 'QWxhZGRpbjpPcGVuU2VzYW1l'
            },
            data: {username: document.getElementById("name").value,
            emailaddress: document.getElementById("email").value},
            success: function () {
                $('#user-added').show();
                $('#user-added').delay(1500).fadeOut('slow');
                $(':input').val('');
            },
            error: function (text) {
                if(text.status == 500){
                    $('#user-not-added').show();
                    $('#user-not-added').delay(1500).fadeOut('slow');
                } else {
                    $('#error').show();
                    $('#error').delay(1500).fadeOut('slow');
                }

            }
        });
    });
});

$(document).ready(function () {
    $('.removeuser').on("click", function(e) {
        let userid = e.target.name;
        console.log(userid)
        $.ajax({
            url: 'http://localhost:8762/ks-userservice/delete',
            method: "POST",
            headers: {
                'token': 'QWxhZGRpbjpPcGVuU2VzYW1l'
            },
            data: {userid: userid},
            success: function () {
                $('#user-removed').show();
                $('#user-removed').delay(1500).fadeOut('slow');
                $('#table' + userid).remove();
                checkTable();
            },
            error: function () {
                $('#error').show();
                $('#error').delay(1500).fadeOut('slow');

            }
        });
    });
});

checkTable();