let password = document.getElementById('password');
let range = document.getElementById('range');
let rangeValueBox = document.getElementById('range-value-box');
let capital = document.getElementById('capital');
let small = document.getElementById('small');
let number = document.getElementById('number');
let symbol = document.getElementById('symbol');
let createPasswordBtn = document.getElementById('create-password');
let allCheckBox = document.querySelectorAll('.check-boxs input');


rangeValueBox.innerText = range.value;
range.addEventListener('input', () => {
    rangeValueBox.innerText = range.value;

})
let all_Char = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz', '0123456789', '@#$&!$%^*'];

function create_Password() {
    password.value = '';

    let password_string = "";

    allCheckBox.forEach((curr, index) => {
        if (curr.checked) {
            password_string += all_Char[index];
        }
    })
    for (let i = 0; i < range.value; i++) {
        let num = Math.floor((Math.random()) * password_string.length);
        let new_Password_char = password_string.charAt(num);
        password.value = password.value + new_Password_char;

    }
}
createPasswordBtn.addEventListener('click', create_Password);
