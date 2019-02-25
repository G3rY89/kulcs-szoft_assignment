$('#user-added').hide();
$('#user-not-added').hide();
$('#error').hide();

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
                console.log("success");
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