/** 
 * Listens to dom for button press and displays and hides Heading when pressed
 * */

document.addEventListener('DOMContentLoaded', function(){
    let button = document.getElementById('the-red-button');
    let heading = document.getElementById('button-message');
    console.log("variables successfully declared")

    button.addEventListener('click', function() {
        console.log("button clicked")
        heading.style.display = heading.style.display === 'none' ? 'block' : 'none';
        console.log("functions executed normally")
    });
});


// function showMessage() {
//     document.getElementById('button-message').style.display = "block"
// }
    