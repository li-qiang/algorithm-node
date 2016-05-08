"use strict";

class ShellSort {
    constructor(list) {
        this.list = list;
    }

    sort(gap) {
        for (let offset = 0; offset < gap; offset++) this.sortGroup(gap, offset);
    }

    sortGroup(gap, offset) {
        for (let j = gap + offset; j < this.list.length; j += gap) this.insertionSort(j, gap);
    }

    insertionSort(j, gap) {
        for (let index = j - gap; index >= 0 & this.list[index] > this.list[index + gap]; index -= gap) this.change(index + gap, index);
    }

    change(i, j) {
        let temp = this.list[i];
        this.list[i] = this.list[j];
        this.list[j] = temp;
    }

    get result() {
        for (let gap = this.list.length >> 1; gap > 0; gap >>= 1) this.sort(gap);
        return this.list;
    }
}

module.exports = ShellSort;
