let pows = function (n) {
    let res = {};

    for(let i=0; i< 10; i++) {
        res[i] = Math.pow(i, n);
    }

    return res;
};

function armstrong(n) {
    let i = 1;
    let min = '1';
    let max = '9';

    let powers = pows(n);

    while (1 < n) {
        max += 9;
        min += 0;
        n--;
    }
    let res = [];

    min = Number(min);
    max = Number(max);

    while(min !== max) {
        N = min++;

        if(isArmstr(N, powers)) {
            res.push(N);
        }
    }

    return res;
}

function isArmstr(num, powers) {
    let number = String(num);
    let sum = 0;

    while(number > 0) {
        sum += powers[number%10];
        number = parseInt(number/10);
    }

    return sum === num;
}

console.time('test');
console.log(armstrong(8));
console.timeEnd('test');
