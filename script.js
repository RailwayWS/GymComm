const button = document.getElementById("confirmButton");

button.addEventListener("click", function () {
  const originalText = button.textContent; // Save the original "Yes" text
  button.textContent = "Sending..."; // Change to "Sending..." as a loading indicator
  button.disabled = true; // Disable the button to prevent spam clicks

  emailjs.send("service_b54w34f", "template_qup48ia", {
    message: "Plants have been watered",
    to_email: "janesmostert@gmail.com" // Replace with your email
  })
    .then(function (response) {
      button.textContent = originalText; // Restore "Yes"
      button.disabled = false; // Re-enable the button
      alert("Notification sent, Thank you!");
    }, function (error) {
      button.textContent = originalText; // Restore "Yes"
      button.disabled = false; // Re-enable the button
      alert("Error sending notification");
    });
});