// script.js
function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Clear any previous error messages
    errorMessage.innerHTML = '';

    // Basic validation checks
    if (username === '' || password === '') {
        errorMessage.innerHTML = 'Both fields are required.';
        return false;
    }

    // You can add more complex validation logic here if necessary

    // If everything is valid, display a success message (or handle login)
    alert('Login Successful!');
    return false; // Prevent form submission for demonstration
}
