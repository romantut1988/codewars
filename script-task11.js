function doubleChar(str) {
        return [...str].map(s => s.repeat(2)).join('');
}

console.log(doubleChar("String"));
console.log(doubleChar("Helloddd World"));
console.log(doubleChar("1234!_ "));
