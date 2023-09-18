function passwordConfirmation() {
    const password = document.getElementById("pass").value;
    const confirmPassword = document.getElementById("confirmpass").value;
   
    if (password == "") {
        alert("Error: The password field is Empty.");
    } else if (password == confirmPassword) {
        alert("Logged In");
    } else {
        alert("Please make sure your passwords match.")
    }
}