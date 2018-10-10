var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/my-image1.jpg') {
        myImage.setAttribute('src', 'images/my-image2.jpg');
    } else {
        myImage.setAttribute('src', 'images/my-image1.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.steItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
}else {
    var storageName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storageName;
}

myButton.onclick = function() {
    setUserName();
}
