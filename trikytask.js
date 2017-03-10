function task3(obj) {
    if(obj == 3 && obj == 10) {
        return Number(obj) + 'task3';
    }
}
let counter = 0;

let lol = {
    valueOf: function () {
        counter++;
        if(counter === 1) return 3;
        if(counter === 2) return 10;
    }
};

function Number() {
    return 'tricky ';
}


let result = task3(lol);
console.log(result);