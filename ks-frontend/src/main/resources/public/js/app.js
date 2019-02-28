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
        if(isInputFilled()){
            if(validateEmail(document.getElementById("email").value)){
                $.ajax({
                    url: 'http://localhost:8762/ks-userservice/add-user',
                    method: "POST",
                    headers: {
                        'token': 'QWxhZGRpbjpPcGVuU2VzYW1l'
                    },
                    data: {username: document.getElementById("name").value,
                        emailaddress: document.getElementById("email").value},
                    success: function () {
                        addSuccess('User successfully enrolled!', 'user-added');
                        $('.alert-success').show();
                        $('.alert-success').delay(1500).fadeOut('slow');
                        setTimeout(function () {
                            $('#user-added').remove();
                        }, 2000);
                        $(':input').val('');
                    },
                    error: function (text) {
                        if(text.status == 500){
                            addError('Username or email address already added!', 'user-not-added');
                            $('.alert').show();
                            $('.alert').delay(1500).fadeOut('slow');
                            setTimeout(function () {
                                $('#user-not-added').remove();
                            }, 2000);
                        } else {
                            addError('Something went wrong!', 'error');
                            $('.alert').show();
                            $('.alert').delay(1500).fadeOut('slow');
                            setTimeout(function () {
                                $('#error').remove();
                            }, 2000);
                        }

                    }
                });
            } else {
                addError('Please provide a valid email address!', 'error');
                $('.alert').show();
                $('.alert').delay(1500).fadeOut('slow');
                setTimeout(function () {
                    $('#error').remove();
                }, 2000);
            }
        } else {
            addError('Both User name and email field are required!', 'error');
            $('.alert').show();
            $('.alert').delay(1500).fadeOut('slow');
            setTimeout(function () {
                $('#error').remove();
            }, 2000);
        }
    });
});

$(document).ready(function () {
    $('.removeuser').on("click", function(e) {
        let userid = e.target.name;
        $.ajax({
            url: 'http://localhost:8762/ks-userservice/delete',
            method: "POST",
            headers: {
                'token': 'QWxhZGRpbjpPcGVuU2VzYW1l'
            },
            data: {userid: userid},
            success: function () {
                addSuccess('User successfully removed!', 'user-removed');
                $('.alert-success').show();
                $('.alert-success').delay(1500).fadeOut('slow');
                setTimeout(function () {
                    $('#user-removed').remove();
                }, 2000);
                $('#table' + userid).remove();
                checkTable();
            },
            error: function () {
                addError('Something went wrong!', 'error');
                $('.alert').show();
                $('.alert').delay(1500).fadeOut('slow');
                setTimeout(function () {
                    $('#error').remove();
                }, 2000);
            }
        });
    });
});

checkTable();

function addSuccess(message, divId) {
    var div = document.createElement('div');

    div.className = 'alert alert-success';
    div.id = divId;

    div.innerHTML =
        '<strong>' + message +'</strong>';

    document.getElementById('popup-container').appendChild(div);
}

function addError(message, divId) {
    var div = document.createElement('div');

    div.className = 'alert alert-danger';
    div.id = divId;

    div.innerHTML =
        '<strong>' + message + '</strong>';

    document.getElementById('popup-container').appendChild(div);
}

function isInputFilled(){
    if(document.getElementById("name").value === "" || document.getElementById("email").value === ""){
        return false;
    }
    return true;
}

function validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}