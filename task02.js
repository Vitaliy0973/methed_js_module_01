'use strict';

const firstCapitalLetter = (text) => {
    return text.trim()[0].toUpperCase() + text.trim().substring(1).toLowerCase();
}

console.log(firstCapitalLetter(' ехали Медведи нА веЛоСиПеДе'));