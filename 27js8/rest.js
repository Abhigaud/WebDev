function sum(...args) {
    return args.reduce((sum, el) => sum+el);
};

console.log(sum(2,3,4,5));
