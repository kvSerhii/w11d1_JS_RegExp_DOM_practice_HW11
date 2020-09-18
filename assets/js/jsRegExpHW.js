'use strict'

// 1. Дана строка 'azza aca aea abba adca abea'.
// Напишите регулярку, которая найдет строки abba adca abea
// по шаблону: буква 'a', 2 любых символа, буква 'a'.
const inString = 'azza aca aea abba adca abea';

const regExpA = /a..a/g;
console.log(inString.match(regExpA).join(" "), "match");


// 2. Дана строка 'azza acxca azxza wwxwwa'.
// Напишите регулярку, которая найдет все строки по краям которых
// стоят буквы 'a', и заменит каждую из них на '!'. Между буквами a
// может быть любой символ (кроме a).
const string2 = 'azza acxca azxza wwxwwa';

const regReplace = /a[^a\s]\w+a/g;
console.log(string2
    .match(regReplace)
    .join(" ")
    .replace(/a/g, '!'), "replaced");