'use strict'

const root = document.getElementById('root');

// creating elements
const form = document.createElement("form");
const inputName = document.createElement("input");
const inputPass = document.createElement("input");
const inputSubmit = document.createElement("input");

// adding attributes
form.classList.add("formContainer");

inputName.type = "text";
inputName.placeholder = "User name";
inputName.classList.add("inputCls");
inputPass.type = "password";
inputPass.placeholder = "Password";
inputPass.classList.add("inputCls");
inputSubmit.type = "submit";
inputSubmit.textContent = "Submit";
inputSubmit.classList.add("inputCls");

// tmp
console.dir(inputName.type);
console.dir(inputName.placeholder);
console.dir(inputPass.type);
console.dir(inputPass.placeholder);
console.dir(inputSubmit.type);
console.dir(inputSubmit.textContent);

// rendering elements
root.appendChild(form);

form.append(inputName, inputPass, inputSubmit);

// form.appendChild(inputName);
// form.appendChild(inputPass);
// form.appendChild(inputSubmit);

// event listener on 'submit' button
inputSubmit.addEventListener("click", (event) => {
    isValid(inputName.value, true) ?
        inputName.classList.add("inputClsCorrect") :
        inputName.classList.add("inputClsIncorrect");
    isValid(inputPass.value, false) ?
        inputPass.classList.add("inputClsCorrect") :
        inputPass.classList.add("inputClsIncorrect");
});

// regexpr
const regName = /[\w]{3,20}/gi;
const regPass = /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[%#;.+])^.{8,40}/g;

function isValid(str, bool) {
    if (bool) {
        if (regName.test(str)) {
            return true;
        }
    } else {
        if (regPass.test(str)) {
            return true;
        }
    }
    return false;
}