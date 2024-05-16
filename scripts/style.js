document.addEventListener("DOMContentLoaded", function () {
    // Get all <p> elements and change their font color to white
    var paragraphs = document.querySelectorAll('p');
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = 'white';
    }
});