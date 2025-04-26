document.getElementById('gymForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get the submit button
  const submitButton = document.querySelector('.submit-button-wrapper button');

  // Disable the button and add pulsing class
  submitButton.disabled = true;
  submitButton.classList.add('pulsing');

  // Get the username
  const username = document.querySelector('input[name="username"]').value;

  // Get the state of each item
  const weightBelt = document.getElementById('weightBeltToggle').checked;
  const boxingGloves = document.getElementById('boxingGlovesToggle').checked;
  const scale = document.getElementById('scaleToggle').checked;
  const foamRoller = document.getElementById('foamRollerToggle').checked;

  // Separate items into present and not present
  const presentItems = [];
  const notPresentItems = [];

  if (weightBelt) {
    presentItems.push('Weight Belt');
  } else {
    notPresentItems.push('Weight Belt');
  }

  if (boxingGloves) {
    presentItems.push('Boxing Gloves');
  } else {
    notPresentItems.push('Boxing Gloves');
  }

  if (scale) {
    presentItems.push('Scale');
  } else {
    notPresentItems.push('Scale');
  }

  if (foamRoller) {
    presentItems.push('Foam Roller');
  } else {
    notPresentItems.push('Foam Roller');
  }

  // Prepare the email content
  const presentItemsText = presentItems.length > 0 ? presentItems.join(', ') : 'None';
  const notPresentItemsText = notPresentItems.length > 0 ? notPresentItems.join(', ') : 'None';

  const emailParams = {
    username: username,
    present_items: presentItemsText,
    not_present_items: notPresentItemsText
  };

  // Send email using EmailJS
  emailjs.send('service_jhuxqxs', 'template_fjxix4a', emailParams)
    .then(function (response) {
      alert('Email sent successfully!');
      // Re-enable the button and remove pulsing class
      submitButton.disabled = false;
      submitButton.classList.remove('pulsing');
    }, function (error) {
      alert('Failed to send email: ' + JSON.stringify(error));
      // Re-enable the button and remove pulsing class even if there's an error
      submitButton.disabled = false;
      submitButton.classList.remove('pulsing');
    });
});