function submissionHandler() {

    var userName = document.getElementById('fname');
    var phoneNumber = document.getElementById('ftel');
    var emailAddress = document.getElementById('femail')

    if (userName.value === '') {
        alert('You must enter your full name to submit the contact form.');
        return false;
    }

    if (phoneNumber.value === '' && emailAddress.value === '') {
        alert('You must either enter an email address or phone number for us to reach back.')
    } 

    var formDiv = document.querySelector(".form1");
    var returnHtml = '<p>';

    returnHtml += 'Thanks for contacting us ' + userName.value + '! <br> We will get back to you soon. Until then, stay safe. <br>';

    if (document.getElementById('rPhone').checked) {
        var phoneMsg = '<b>Method of contact:</b>   call to ' + phoneNumber.value;
        returnHtml += phoneMsg;
    } else if (document.getElementById('rEmail').checked) {
        var emailMsg = '<b>Method of contact:</b>   email to ' + emailAddress.value;
        returnHtml += emailMsg;
    }

    returnHtml += '</p>';

    formDiv.innerHTML = returnHtml;
    return false;
}
