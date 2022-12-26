// pronouns.page integration
function pronouns(data) {
    document.getElementById("pronouns").innerHTML = '('+data.profiles.en.pronouns[0].value+')';
}

fetch('https://en.pronouns.page/api/profile/get/laker?version=2')
    .then((response) => response.json())
    .then((data) => pronouns(data));