console.log('hello')

let titleDiv =
    document.getElementById('titleDiv')

console.log(titleDiv)
console.log('before:', titleDiv.innerText)
let message = 'am here js!';
titleDiv.innerText = message;


console.log('after:', titleDiv.innerText)

titleDiv.innerHTML = `<p> ${message}</p>`