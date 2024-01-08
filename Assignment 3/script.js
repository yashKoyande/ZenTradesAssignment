function authenticate(){
    debugger;

    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
        alert("Invalid email format.");
        return;
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[a-zA-Z0-9@]+$/;
    if (!passwordRegex.test(password)) {
        alert("Password must contain an uppercase letter, a number, and only @ as a special character.");
        return;
    }

    if(username=="admin"&&password=="admin"){
        alert("Login Successful");
    }

    // If validation passes, submit the form or handle login logic
    console.log("Validation successful!");
    // Add code for form submission or login logic here
};
