// Uncomment for deploy
// const socket = io('https://fast-castle-70914.herokuapp.com/');

// Comment for deploy
const socket = io('http://localhost:3000');


let buttonValider = document.getElementById('validateButton');

buttonValider.addEventListener('click', function () {

    let name = document.getElementById('inputName');
    socket.emit('sendName', name.value);
    
});