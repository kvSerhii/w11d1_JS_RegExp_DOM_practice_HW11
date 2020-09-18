'use strict'

// const regexp1 = /[A-z]{12}/ig;
const regexp1 = /\\b[A-Z][a-z]*\\b/g;
const regexp2 = new RegExp('\\b[A-Z][a-z]*\\b', 'g');
const uNameExp = /^\D(\w){6,20}$/; // 6-20 symbols, 1-st not a number
// ^(^\S|\d)[\w\S]{6,15}$

const passExp = /^(\d{8,12}|\w{8,12})$/; // 8-12 symbols no spaces or tabs
// const netExpr = /(\d{1,3}\.){3}\d{1,3}\b/g; //  \d{1,3}(?:\.\d{1,3}){3}\g
const netExpr = /\d{1,3}(?:\.\d{1,3}){3}/g; //  \d{1,3}(?:\.\d{1,3}){3}\g

const str = 'sdfhjgjk 123487 kisdjf l*8932 890*&) &657234^%';
const passStr1 = '23476908';
const passStr2 = 'jklsdhf_assd';
const passStr3 = '867tagsdf987';
const passStr4 = '8asdu';
const userNameStr1 = 'aaasaaa';
const userNameStr2 = 'asdasdfsdafgasdgasdgasdfasdf';
const str1 = 'inet 150.180.1.150 netmask 255.255.255.0 broadcast 192.168.1.255';

// test
console.log(regexp1.test(str));
console.log(regexp2.test(str));

// search
console.log(str.search(regexp1));
console.log(str.search(regexp2));

// match
console.table(str.match(regexp1));
console.table(str.match(regexp2));

// passTest
console.log("PASS TEST");
console.log(passExp.test(passStr1));
console.log(passExp.test(passStr2));
console.log(passExp.test(passStr3));
console.log(passExp.test(passStr4));

// user name Test
console.log("User name TEST");
console.log(uNameExp.test(userNameStr1));
console.log(uNameExp.test(userNameStr2));

// inet Test
console.log(netExpr.test(str1));
console.table(str1.matchAll(netExpr));