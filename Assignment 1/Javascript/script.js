
alert("Welcome to Beans Cafe!");

let form = document.querySelector("form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let seating = document.querySelector('input[name="seating"]:checked');

    let extra = document.querySelector('input[name="extra"]').checked;

    if (name == "") {
        alert("Please enter your name.");
        return;
    }

    if (email == "") {
        alert("Please enter your email.");
        return;
    }

    if (seating == null) {
        alert("Please select Indoor or Outdoor seating.");
        return;
    }

    if (extra == true) {
        alert("Thank you " + name + "! Your table is reserved. You also selected extra food.");
    }
    else {
        alert("Thank you " + name + "! Your table is reserved.");
    }

});

