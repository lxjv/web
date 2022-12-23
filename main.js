
// pronouns.page integration

function pronouns(data) {
    document.getElementById("pronouns").innerHTML = '('+data.profiles.en.pronouns[0].value+')';
}

fetch('https://en.pronouns.page/api/profile/get/laker?version=2')
    .then((response) => response.json())
    .then((data) => pronouns(data));


// neatnik/typo
document.addEventListener('DOMContentLoaded', function() { 
  var element = document.getElementById('typo');
  var text = element.innerHTML;
  typo(element, text);
});

// pgp copy

function pgpGet() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
}
