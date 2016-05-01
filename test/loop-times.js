"use strict";


module.exports = (times, fn) => {
    let res = [];
    for (let i = 0; i < times; i++) {
        res.push(fn());
    }
    return res;
};