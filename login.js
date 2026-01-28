// Wait for the button to be clicked
document.getElementById('loginBtn').addEventListener('click', () => {
    
    // 1. Capture the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // 2. Simple Validation Logic
    if (username === "admin" && password === "12345") {
        message.style.color = "green";
        message.textContent = "Login successful! Redirecting...";
        
        // Simulate a redirect
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1500);
    } else {
        console.log("Login failed for user:", username);
        message.style.color = "red";
        message.textContent = "Invalid username or password.";
    }
});