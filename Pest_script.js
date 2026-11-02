// scroll to top button
window.onscroll = function() {
    let button = document.getElementById("topBtn");

    if (document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
// dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
// current time
function displayDateTime() {

    const now = new Date();

    document.getElementById("datetime").innerHTML =
        now.toLocaleString();
}

setInterval(displayDateTime, 1000);

// enquire ticket

function identifyPest() {

    const pest = document.getElementById("pest").value;

    let result = "";

    switch(pest) {

        case "rodent":
            result = "Recommended treatment price: R300";
            break;

        case "termite":
            result = "Recommended treatment price: R400";
            break;

        case "cockroach":
            result = "Recommended treatment price: R500";
            break;

        default:
            result = "Please select a pest";
    }

    document.getElementById("result").innerHTML = result;
}
// contact
function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(name.trim() === "") {
        alert("Please enter your name");
        return false;       }
    if(email.trim() === "") {
        alert("Please enter your email");
        return false;       }
    if(message.trim() === "") {
        alert("Please enter your message");
        return false;       }
    return true;
}
// image hover effect
const img = document.getElementById('mainImage');
  img.addEventListener('mouseenter', () => {
    img.style.width = '10%';
  });
  img.addEventListener('mouseleave', () => {
    img.style.width = '25%';
  });
  