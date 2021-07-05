const buttonCopy = document.getElementById("button-copy") ;
const copytext = document.getElementById('copytext');
buttonCopy.addEventListener("click", function() {


copytext.select();
document.execCommand('copy');

});

// Copier Coller un texte 