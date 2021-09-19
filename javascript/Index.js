function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var container = document.getElementById('container');
    container.classList.toggle('active')

    var user = document.getElementById('ph').value;
    var pass = document.getElementById('pa').value;
    if((username == user) && (password == pass))
    {
        alert("You logged in Succesfully");
    }
    else
    {
        alert("Invalid username or password");
    }
    // var container = document.getElementById('container');
    // container.classList.toggle('active')

}
function toggle2() {
    var contain = document.getElementById('contain');
    contain.classList.toggle('active')

    var username = document.getElementById('user').value;
    var password = document.getElementById('pass').value;

}