const task3Element = document.getElementById('task-3');

function ahtung() {
    alert('this is an alert!');
}

function callName(name) {
    alert('hello' + name);
}

function threeStrings(str1, str2, str3) {
    let newText = `${str1}${str2}${str3}`;
    return newText;
}

ahtung();
callName('łukasz');

task3Element.addEventListener('click', ahtung);
let newText = threeStrings('cześć', 'czołem', 'kluski pod stołem');
alert(newText);