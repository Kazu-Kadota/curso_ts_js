function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function fatch () {
    f2(fatch2);
}

function fatch2 () {
    f3(fatch3);
}

function fatch3 () {
    console.log('Olá mundo!')};

function f1(callback) {
    setTimeout(function () {
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function () {
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function () {
        console.log('f3');
        if (callback) callback();
    }, rand());
}

// f1(function () {
//     f2(function() {
//         f3(function() {
//             console.log('Olá mundo!');
//         });
//     });
// });

f1(fatch);
