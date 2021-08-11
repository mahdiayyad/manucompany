const contactForm = document.querySelector('.form-contact');
let name = document.getElementById('p_name');
let email = document.getElementById('p_email');
let subject = document.getElementById('p_subject');
let phone = document.getElementById('p_phone');
let message = document.getElementById('p_message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        phone: phone.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/en/contact');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
        console.log(xhr.responseText);
        if(xhr.responseText == 'success') {
            alert('Email sent');
            name.value = '';
            email.value = '';
            subject.value = '';
            phone.value = '';
            message.value = '';
        } else {
            alert('Something went wrong!');
        }
    }

    xhr.send(JSON.stringify(formData));
})