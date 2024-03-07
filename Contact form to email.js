function emailSend() {

    var userName = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    var messageBody = "Name " + userName +
        "<br/> Phone " + phone +
        "<br/> Email " + email;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "stefanplekh@gmail.com",
        Password: "2C9D595C5EFB28B3F629543D736522A7D107",
        To: 'nafetsart@gmail.com',
        From: "stefanplekh@gmail.com",
        Subject: "This is the subject",
        Body: messageBody
    }).then(
        message => {
            if (message == 'OK') {
                swal("Secussful", "You clicked the button!", "success");
            }
            else {
                swal("Error", "You clicked the button!", "error");
            }
        }
    );
}