$(document).ready(function () {
    console.log("Document ready");

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validateDob(dob) {
        const currentDate = new Date();
        const userDob = new Date(dob);
        const age = currentDate.getFullYear() - userDob.getFullYear();
        return age >= 18;
    }

    function validateName(name) {
        return name.trim() !== '';
    }

    function validatePasswordMatch(password, confirmPassword) {
        return password === confirmPassword;
    }

    function validateForm() {
        console.log("Validating Msg")
        const name = $('#name').val();
        const email = $('#email').val();
        const dob = $('#dob').val();
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();

        if (!validateName(name)) {
            alert('Enter Name');
            return false;
        }

        if (!validateEmail(email)) {
            alert('Please provide a valid email address.');
            return false;
        }

        if (!validateDob(dob)) {
            alert('User must be 18 years or older.');
            return false;
        }

        if (!validatePasswordMatch(password, confirmPassword)) {
            alert('Password and Confirm Password do not match.');
            return false;
        }
return true;

    }

    $('#registrationForm').submit(function (event) {
        if (!validateForm()) {
            event.preventDefault(); 
        }
    });
});
