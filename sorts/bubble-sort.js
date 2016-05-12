"use strict";

class BubbleSort {
    constructor(list) {
        this.list = list;
    }

    sort(list, length) {
        for (let i = 0; i < length - 1; i++) {
            if (list[i] > list[i + 1]) this.change(list, i, i + 1);
        }
    }

    get result() {
        for (let i = 0; i < this.list.length; i++) {
            this.sort(this.list, this.list.length - i);
        }
        return this.list;
    }

    change(list, prev, next) {
        var temp = list[prev];
        list[prev] = list[next];
        list[next] = temp;
    }
}

module.exports = BubbleSort;
