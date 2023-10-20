document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const typed_user = document.getElementById("username").value;
    let userFound = false;

    for (const user in login) {
        if (typed_user === user) {
            const typed_password = document.getElementById("password").value;
            if (typed_password === login[user].pass) {
                window.location.href = "welcome.html";
                return;
            } else {
                alert("Invalid password");
            }
            userFound = true;
            break;
        }
    }

    if (!userFound) {
        alert("Invalid username");
    }
});
