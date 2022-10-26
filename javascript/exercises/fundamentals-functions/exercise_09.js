function bhaskara(ax2, bx, c) {
    let delta = bx ** 2 - (4 * ax2 * c);

    if (delta < 0)
        return ('Negative delta');
    delta = Math.sqrt(delta);
    return [
        (-bx + delta) / (2 * ax2),
        (-bx - delta) / (2 * ax2)
    ];
}

console.log(bhaskara(1, 12, -13));
console.log(bhaskara(2, -16, -18));
