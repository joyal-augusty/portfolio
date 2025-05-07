let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}

/**nav hide */
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})


/*email*/
function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,  // make sure it's lowercase!
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_axdxocf", "template_xg4ngyp", parms)
    .then(function(response) {
        alert("Email sent successfully!");
        console.log("SUCCESS", response);
        document.getElementById("contact-form").reset();
    }, function(error) {
        alert("Failed to send email. Please try again.");
        console.error("FAILED", error);
    });
}
