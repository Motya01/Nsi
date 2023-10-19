const login = {
    "motya": {
        "name": "Motya",
        "pass": "1234"
    },
    "motya1": {
        "name": "Tobias",
        "pass": "4567"
    },
    "motya3": {
        "name": "Linus",
        "pass": "7890"
    }
};

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const typed_user = document.getElementById("username").value;
    let userFound = false;

    for (const user in login) {
        if (typed_user === user) {
            const typed_password = document.getElementById("password").value;
            if (typed_password === login[user].pass) {
                // Redirect to a new page when the login is successful
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