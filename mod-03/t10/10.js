document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("source");
    const target = document.getElementById("target");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const firstName = document.querySelector('input[name="firstname"]').value;
        const lastName = document.querySelector('input[name="lastname"]').value;

        const fullName = firstName + " " + lastName;
        target.textContent = "Your name is " + fullName;
    });
});