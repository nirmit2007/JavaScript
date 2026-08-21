const getEmail = () => {

    const allmail = [
        "test1@gmail.com",
        "test2@gmail.com",
        "test3@gmail.com",
        "test4@gmail.com",
        "test5@gmail.com"
    ];

    const email = document.getElementById("email");

    console.log(email.value);

    if(allmail.includes(email.value))
    {
        alert("Email Found");
    }
    else
    {
        alert("Email Not Found");
    }
}