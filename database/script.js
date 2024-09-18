// script.js

// Register user
function registerUser() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const bio = document.getElementById('bio').value;
    const profilePicture = document.getElementById('profile-picture').value;

    const userData = {
        username,
        email,
        password,
        bio,
        profilePicture,
    };

    fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            alert('Registration successful!');
            // Save token and redirect to profile page or dashboard
        } else {
            alert(data.message);
        }
    })
    .catch(error => console.error('Error:', error));
}
