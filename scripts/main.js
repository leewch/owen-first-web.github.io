/*let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';*/
/*document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
}*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/C罗倒钩-宽.jpg') {
      myImage.setAttribute('src', 'images/C罗倒钩.jpg');
    } else {
      myImage.setAttribute('src', 'images/C罗倒钩-宽.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Firstpage，' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Firstpage，' + storedName;
}

myButton.onclick = function() {
   setUserName();
}