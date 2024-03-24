document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simple validation (just checking if username and password are not empty)
    if (username.trim() === "" || password.trim() === "") {
        document.getElementById("error-message").textContent = "Username and password are required!";
    } else {
        // Here you can add your login logic (e.g., send login request to server)
        // For demo purposes, just displaying the username and password
        alert("Username: " + username + "\nPassword: " + password);
        document.getElementById("error-message").textContent = "";
    }
});

// test.addEventListener("mouseover", setDark);
// test.addEventListener("mouseout", setLight);

// function setDark() {
//     document.body.style.background = "#154979";
//     test.style.color = "white";
// }

// function setLight() {
//     document.body.style.background = "white";
//     test.style.color = "white"
// }
// onsubmit="return validateForm()" method="get" inside the html form element
