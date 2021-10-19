function countBy(x, n) {
    return [...Array(n)].map((_, i) => x * ++i);
}
onsole.log(countBy(2, 5))