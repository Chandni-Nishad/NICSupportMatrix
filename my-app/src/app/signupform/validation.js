document.getElementById('signupform').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // First Name Validation
    const firstName = document.getElementById('firstname').value.trim();
    if (firstName === '') {
        document.getElementById('firstnameError').innerText = 'First name is required';
        isValid = false;
    } else {
        document.getElementById('firstnameError').innerText = '';
    }

    // Last Name Validation
    const lastName = document.getElementById('lastname').value.trim();
    if (lastName === '') {
        document.getElementById('lastnameError').innerText = 'Last name is required';
        isValid = false;
    } else {
        document.getElementById('lastnameError').innerText = '';
    }

    // Email Validation
    const email = document.getElementById('emailid').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('emailError').innerText = 'Email is required';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email';
        isValid = false;
    } else {
        document.getElementById('emailError').innerText = '';
    }

    // Mobile Number Validation
    const mobile = document.getElementById('mobilenumber').value.trim();
    const mobilePattern = /^[0-9]{10}$/;
    if (mobile === '') {
        document.getElementById('mobileError').innerText = 'Mobile number is required';
        isValid = false;
    } else if (!mobilePattern.test(mobile)) {
        document.getElementById('mobileError').innerText = 'Please enter a valid 10-digit mobile number';
        isValid = false;
    } else {
        document.getElementById('mobileError').innerText = '';
    }

    // Password Validation
    const password = document.getElementById('password').value.trim();
    if (password === '') {
        document.getElementById('passwordError').innerText = 'Password is required';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Password must be at least 6 characters';
        isValid = false;
    } else {
        document.getElementById('passwordError').innerText = '';
    }

    if (isValid) {
        alert('Form submitted successfully');
        // Here you can write code to submit form data to the server
    }
});
