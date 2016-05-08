"use strict";

class HeapSort {
    constructor(list) {
        this.list = list;
        this.length = list.length;
    }

    buildMaxHeap() {
        for (let i = this.length >> 1; i >= 0; i--) {
            this.maxHeapFor(i);
        }
    }

    compareWith(first, second) {
        return second < this.length && this.list[second] > this.list[first] ? second : first;
    }

    sortList() {
        this.buildMaxHeap();
        do {
            this.change(0, this.length - 1);
            this.length--;
            this.maxHeapFor(0);
        } while (this.length > 0);
    }

    maxHeapFor(index) {
        let largeIndex = this.compareWith(index, 2 * index);
        largeIndex = this.compareWith(largeIndex, 2 * index + 1);
        if (largeIndex == index) return;
        this.change(index, largeIndex);
        this.maxHeapFor(largeIndex);
    }

    change(fIndex, sIndex) {
        if (fIndex == sIndex) return;
        let first = this.list[fIndex];
        this.list[fIndex] = this.list[sIndex];
        this.list[sIndex] = first;
    }

    get result() {
        if (this.length > 1) this.sortList();
        return this.list;
    }
}

module.exports = HeapSort;
