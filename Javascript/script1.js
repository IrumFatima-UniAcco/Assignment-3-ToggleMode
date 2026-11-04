/* Form */
let form = document.getElementById("myForm");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("username").value;
    let email = document.getElementById("email").value;

    if (name != "" && email != "") {

        document.getElementById("message").textContent =
        "Thank you for visiting, " + name +
        "! We will contact you at " + email;

    } else {

        document.getElementById("message").textContent =
        "Please fill all required fields.";

    }

    checkAge();

});
/* Menu */
let rows = document.querySelectorAll("#menuTable tr");

rows.forEach(function(row) {

    row.addEventListener("mouseover", function() {
        row.style.backgroundColor = "#f3dfc9";
    });

    row.addEventListener("mouseout", function() {
        row.style.backgroundColor = "";
    });

});
/* Toggle */
let themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

});
/* Total */
let items = document.querySelectorAll(".item");

items.forEach(function(item) {

    item.addEventListener("change", calculateTotal);

});

function calculateTotal() {

    let total = 0;

    items.forEach(function(item) {

        if (item.checked) {
            total = total + Number(item.value);
        }

    });

    document.getElementById("total").textContent =
    "Total: $" + total;

}
/* Age */
function checkAge() {

    let birthYear = document.getElementById("birth-year").value;

    let year = parseInt(birthYear);

    let age = 2026 - year;

    if (birthYear == "" || isNaN(year) || year < 1900 || year > 2026) {

        document.getElementById("discount").textContent =
        "Please enter a valid birth year.";

    } else if (age <= 25) {

        document.getElementById("discount").textContent =
        "You qualify for the student discount!";

    } else if (age >= 60) {

        document.getElementById("discount").textContent =
        "You qualify for the senior discount!";

    } else {

        document.getElementById("discount").textContent =
        "No age-based discount available.";

    }

}
/* Read */
let readBtn = document.getElementById("readBtn");

readBtn.addEventListener("click", function() {

    let moreText = document.getElementById("moreText");

    moreText.classList.toggle("hidden");

    if (moreText.classList.contains("hidden")) {

        readBtn.textContent = "Read More";

    } else {

        readBtn.textContent = "Read Less";

    }

});
/* Filter */
let filterButtons = document.querySelectorAll(".filterBtn");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let category = button.getAttribute("data-category");

        rows.forEach(function(row, index) {

            if (index === 0) {
                return;
            }

            let rowCategory = row.getAttribute("data-category");

            if (category === "all" || category === rowCategory) {

                row.style.display = "";

            } else {

                row.style.display = "none";

            }

        });

    });

});
/* Date */
let hour = new Date().getHours();

let status = document.getElementById("status");

if (hour >= 8 && hour < 20) {

    status.textContent = "We are Open!";
    status.style.color = "green";

} else {

    status.textContent = "Closed - Open at 8 AM";
    status.style.color = "red";

}
/* Note */
let notes = document.getElementById("special-notes");

notes.addEventListener("input", function() {

    let remaining = 100 - notes.value.length;

    document.getElementById("counter").textContent =
    remaining + " characters remaining";

});