"use strict";


/// filter

// const names = ['ivan', 'ann', 'ksenia', 'voldemar'];

// const shortNames = names.filter(function (name) {
//     return name.length < 5;
// });

// console.log(shortNames);

/// map

// const answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map(item => item.toLowerCase());
// console.log(result);

/// every/some


// const some = [4, 'hhh', 'ggggggg'];

// console.log(some.some(item => typeof(item) === 'number'));

// reduce

// const arr = [4, 5, 1, 3, 2, 6];

// const res = arr.reduce((sum, current) => sum + current);

// console.log(res);


// const arr = ['apple', 'pear', 'banana'];

// const res = arr.reduce((sum, current) => `${sum},  ${current}`);

// console.log(res);



// const obj = {
//     ivan: 'persone',
//     ann: 'persone',
//     dog: 'animal',
//     cat: 'animal'
// };

// const newArr = Object.entries(obj)
// .filter(item => item[1] === 'persone')
// .map(item => item[0]);

// console.log(newArr);


const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    return data.filter(item => item.amount > 0).map(item => item.amount).reduce((a, b) => a + b);
};
console.log(getPositiveIncomeAmount(funds));


const getTotalIncomeAmount = (data) => {
    if(data.some(item => item.amount < 0)) {
        return data.map(item => item.amount).reduce((a, b) => a + b);
    } else {
        getPositiveIncomeAmount(funds);
    }
};