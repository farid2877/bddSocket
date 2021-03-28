// Uncomment for deploy
const socket = io('https://acid-login.herokuapp.com/');

// Comment for deploy
// const socket = io('http://localhost:3000');


let buttonValider = document.getElementById('validateButton');

buttonValider.addEventListener('click', function () {

    let name = document.getElementById('inputName');
    let familyName = document.getElementById('inputFamilyName');
    if (name.value === "" || familyName.value === "" ) {
        alert("Empty case")
    } else {
        socket.emit('sendName', name.value, familyName.value);
    }
    
    
});