document.getElementById('logout-button').addEventListener('click', function() {
    // Simulate clearing session data
    sessionStorage.clear(); // or localStorage.clear();

    // Display a message or redirect to the login page
    document.getElementById('message').textContent = 'You have been logged out. Redirecting to login page...';

    // Redirect to login page after 2 seconds
    setTimeout(function() {
        window.location.href = 'login.html';
    }, 2000);
});

document.getElementById('cancel-button').addEventListener('click', function() {
    // Redirect back to the profile page or previous page
    window.location.href = 'proto5.html';
});
