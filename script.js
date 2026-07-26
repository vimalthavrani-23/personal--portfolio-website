// Smooth Scrolling

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {

        e.preventDefault();

        const id = this.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        });

    });
});


// Typing Animation

const text = [
    "Full Stack Developer",
    "Web Developer",
    "B.Tech Student"
];

let index = 0;
let char = 0;
let current = "";
let letter = "";

(function type(){

    if(index === text.length){
        index = 0;
    }

    current = text[index];
    letter = current.slice(0, ++char);

    document.querySelector("#home h3").textContent = letter;

    if(letter.length === current.length){
        index++;
        char = 0;
        setTimeout(type,1000);
    }
    else{
        setTimeout(type,100);
    }

})();


// Contact Form Validation

const form = document.querySelector("form");

form.addEventListener("submit",function(e){

    e.preventDefault();

    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector("textarea").value;

    if(name==="" || email==="" || message===""){
        alert("Please fill all fields.");
        return;
    }

    alert("Message Sent Successfully!");

    form.reset();

});
