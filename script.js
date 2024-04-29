function sendMail() {
    let selectedDays = [];
    document.querySelectorAll('input[name="days"]:checked').forEach(function(checkbox) {
        selectedDays.push(checkbox.value);
    });

    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value,
        address: document.getElementById("address").value,
        apt: document.getElementById("apt").value,
        phone: document.getElementById("phone").value,
        days: selectedDays, // Pass array of selected days
    };

    emailjs.send("service_lahr6qk", "template_y7sdoeu", parms)
    .then(function(response) {
        console.log("Email has been sent:", response);
        alert("Email Has Been Sent");
    }, function(error) {
        console.error("Email send failed:", error);
        alert("Failed to send email. Please try again later.");
    });

    console.log("Parameters:", parms);
}