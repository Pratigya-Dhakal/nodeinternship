const add = (a, b) => {
    return a + b;
};
const sub = (a, b) => {
    return a - b;
};
const mul = (a, b) => {
    return a * b;
};
const div = (a, b) => {
    return a / b;
};

const name = "Pratigya MODULE CREATION"
// for single function
// module.exports = add;

// module.exports.add = add;
// module.exports.sub = sub;
module.exports = { add, sub , mul ,div , name}
