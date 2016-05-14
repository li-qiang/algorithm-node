"use strict";

class InsertionSort {
    constructor(list) {
        this.list = list;
    }

    sort(index) {
        let i, temp = this.list[index];
        for (i = index - 1; i >= 0 && this.list[i] > temp; i--) this.list[i + 1] = this.list[i];
        this.list[i + 1] = temp;
    }

    get result() {
        for (let i = 1; i < this.list.length; i++) this.sort(i);
        return this.list;
    }
}

module.exports = InsertionSort;
