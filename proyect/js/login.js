document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded credentials for demonstration purposes
    const validUsername = 'user';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
        window.location.href = 'proto5.html';
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
});
