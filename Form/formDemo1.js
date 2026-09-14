const submitHandler = (event) => {

    // Prevent page reload
    event.preventDefault();

    console.log("form submitted !!!!");

    const name = document.getElementById("name");
    console.log(name.value);

    const email = document.getElementById("email");
    console.log(email.value);

    const age = document.getElementById("age");
    console.log(age.value);

    const country = document.getElementById("country");
    console.log(country.value);

    // Get radio buttons using name
    const gender = document.getElementsByName("gender");

    console.log(gender);

    for (let i = 0; i < gender.length; i++) {

        if (gender[i].checked == true) {
            console.log("gender --->", gender[i].value);
        }

    }

    const hobbies = document.getElementsByName("hobby");

    for (let i = 0; i < hobbies.length; i++) {
        if (hobbies[i].checked == true) {
            console.log("hobby --->", hobbies[i].value);
        }
    }
};