document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.getElementById("registration-form");
    let feedbackDiv = document.getElementById("form-feedback");
    let isValid = true;
    let messages = [];

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if(username.length < 3) {
            isValid = false;
            messages.push("username must be atleast 3 characters");
        }
        if(!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("emails must have the @ symbol");
        }
        if(!password.length >= 8) {
            isValid = false;
            messages.push("password must be atleast");
        }

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.display = "block";
            feedbackDiv.style.color = "#28a745"
        } else {
            feedbackDiv.innerHTML = messages.join("<br/>");
            feedbackDiv.style.display = "block";
            feedbackDiv.style.color = "#dc3545";
        }
    })
})