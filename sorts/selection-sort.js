"use strict";

class SelectionSort {
    constructor(list) {
        this.list = list;
    }

    sort(index) {
        for (let i = index; i > 0 && this.list[i] < this.list[i - 1]; i--) this.change(i, i - 1);
    }

    change(i, j) {
        let temp = this.list[i];
        this.list[i] = this.list[j];
        this.list[j] = temp;
    }

    get result() {
        for (let i = 1; i < this.list.length; i++) this.sort(i);
        return this.list;
    }
}

module.exports = SelectionSort;
