function validateEmail() {
    // Get the input value
    var email = document.getElementById('emailInput').value;

    // Regular expression for a simple email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the regex
    if (emailRegex.test(email)) {
        document.getElementById('result').innerHTML = 'Valid email address! ';
    } else {
        document.getElementById('result').innerHTML = 'Invalid email address. Please enter a valid email.';
    }
}