// JavaScript to validate the login
function validateLogin(event) {
    event.preventDefault();  // Prevent form submission

    // Get the username and password from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded login credentials (you can change this for real-world usage)
    const correctUsername = 'admin';
    const correctPassword = '12345';

    // Get the error message element
    const errorMessage = document.getElementById('error-message');

    // Check if the username and password are correct
    if (username === correctUsername && password === correctPassword) {
        // Display success message in the popup
        showPopup("Congratulations, you have successfully entered!");
    } else {
        // Show error message
        errorMessage.textContent = 'Invalid username or password. Please try again.';
        // Display error message in the popup
        showPopup("Error! Please try again.");
    }
}

// Function to show the popup
function showPopup(message) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    popupMessage.textContent = message;
    popup.style.display = 'flex';
}
console.log(showPopup)
// Function to close the popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
console.log(closePopup)