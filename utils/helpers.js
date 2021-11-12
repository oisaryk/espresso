const sum = (a, b) => {
    return a + b;
};

const isString = (value) => {
    return typeof value === 'string';
}

module.exports = {
    sum,
    isString
}