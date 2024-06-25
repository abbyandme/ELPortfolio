let sendButton = document.getElementById("send-button");
const form = document.getElementById("contact-form");
const successMessage = document.querySelector('.success .success-text');

const serviceID = "gmail";
const templateID = "form-submit";

function addDashes (element) {
    let ele = document.getElementById(element.id);
    ele = ele.value.split('-').join('');    // Remove dash (-) if mistakenly entered.

    let finalVal = ele.replace(/(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/, '$1$2$3-$4$5$6-$7$8$9$10')
    let finalVal2 = ele.replace(/(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/, '$1-$2$3$4-$5$6$7-$8$9$10$11')

    if (ele.length == 10) {
        document.getElementById(element.id).value = finalVal;
    }
    else if (ele.length == 11) {
        document.getElementById(element.id).value = finalVal2; 
    }
}

function validateFirstName() {
    var fnError = document.querySelector("#first-name + span.fn-text");
    var fnname = document.getElementById('first-name').value;

    if (fnname.length == 0) {
        fnError.innerHTML = 'First name is required';
        return false;
    }
    if (!fnname.match(/^[A-Za-z]*$/)){
        fnError.innerHTML = 'Invalid characters';
        return false;
    }
    else {
        fnError.innerHTML = '';
        return true;
    }
}
function validateLastName() {
    var lnError = document.querySelector("#last-name + span.ln-text");
    var lnname = document.getElementById('last-name').value;

    if (lnname.length == 0) {
        lnError.innerHTML = 'Last name is required';
        return false;
    }
    if (!lnname.match(/^[a-zA-Z]+$/)){
        lnError.innerHTML = 'Invalid characters';
        return false;
    }
    else {
        lnError.innerHTML = '';
        return true;
    }
}
function validateEmail() {
    var emailError = document.querySelector("#email + span.email-text");
    var email = document.getElementById('email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = 'Invalid Email';
        return false;
    }
    else {
        emailError.innerHTML = '';
        return true;
    }
}
function validatePhone() {
    var phoneError = document.querySelector("#phone + span.phone-text");
    var phone = document.getElementById('phone').value;
    if (phone == 0) {
        phoneError.innerHTML = '';
        return false;
    }
    else if(!phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)){
        phoneError.innerHTML = 'Invalid Phone Number';
        return false;
    }
    else {
        phoneError.innerHTML = '';
        return true;
    }
}
function validateMessage() {
    var messageError = document.querySelector("#message + span.message-text");
    var message = document.getElementById('message').value;

    if (message.length == 0) {
        messageError.innerHTML = 'Message is required';
        return false;
    }
    else {
        messageError.innerHTML = '';
        return true;
    }
}   

sendButton.addEventListener('click', function(e) {
            e.preventDefault();
            sendButton.value = 'Send...';
            var submitError = document.getElementById("submit-error");
            var x = document.getElementById("success-text");
            var y = document.getElementById("fields");
            var z = document.getElementById("hide");

            if(!validateFirstName() || !validateLastName() || !validateEmail() || !validatePhone() || !validateMessage()) {
                submitError.style.display = 'block'
                submitError.innerHTML = 'Please fix error to submit';
                setTimeout(function(){submitError.style.display = 'none';}, 5000);
                return false;
            }
            else {
                emailjs
                .sendForm(serviceID, templateID, form)
                .then(() => {
                    sendButton.value = 'Send Email';
                    x.style.display = x.style.display != "block"?"block":"none";
                    y.style['display'] = 'none';
                    z.style['display'] = 'none';
                    setTimeout(() => {
                        document.location.reload(form);
                      }, 3000);
                    
                }, (err) => {
                    sendButton.value = 'Send Email';
                    alert(JSON.stringify(err));
                });
            }  
        });



