document.addEventListener('DOMContentLoaded', function(){
    let button = document.getElementById('the-red-button');
    let heading = document.getElementById('button-message');

    button.addEventListener('click', function() {
        heading.style.display = heading.style.display === 'none' ? 'block' : 'none';

    });
});





// function showMessage() {
//     document.getElementById('button-message').style.display = "block"
// }
    