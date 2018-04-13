// Async: Now and later ---------------------

function numberOne() {
    console.log('Hello World')
    return 1;
}

function whyOnEarth() {
    number = number * 4;
    console.log('These instructions are weird.');
}

let number = numberOne()

setTimeout(() => {
    whyOnEarth();
}, 2000);


// Callbacks ----------------------------

function getWords() {
    console.log('Word 1');
    setTimeout(() => {
        console.log('Word 2');
    }, 2000);
    console.log('Word 3');
    console.log('Word 4');
}

getWords();

function countdown(num, callback) {
    setTimeout(() => {
        return callback();
    }, num);
};

function done() {
    console.log('Done');
}

countdown(1000, done);

// Promises -----------------------------------

let globalVar = true;

function orderingChickenSandwich(object) {
    return new Promise((resolve, reject) => {
        if (globalVar === true) {
            let object = {
                sandwich: "chicken",
                veggies: "lettuce"
            }
            resolve(object);
        } else {
            let err = new Error('No chicken sandwich, sorry');
            reject(err);
        }
    })
}

function orderFood() {
    orderingChickenSandwich()
        .then((object) => {
            console.log(object);
        }).catch((err) => {
            console.log(err);
        });
};

orderFood()

// Chaining Promises ------------------

function newPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 2000);
    })
}

function returnNumber() {
    newPromise()
        .then((result) => {
            console.log(result);
            return result * 2;
            console.log(result);
        }).then((result) => {
            console.log(result);
            return result * 4;
        }).then((result) => {
            console.log(result);
            return result * 6;
        }).then((result) => {
            console.log(result);
        })
};

returnNumber();
