const email = document.querySelector(".email");
const subject = document.querySelector(".subject");
const message = document.querySelector(".message");





form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(email.length > 5 && email.includes("@") && email.includes(".")){}
    else{
        e.preventDefault();
    }
    if(subject.length >= 2){}
    else{
        e.preventDefault();
    }
    if(message.length >= 10 ){}
    else{
        e.preventDefault();
    }
});