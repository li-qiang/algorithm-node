"use strict";

class SelectionSort {
    constructor(list) {
        this.list = list;
    }

    sort(index) {
        let min = index;
        for (let i = index + 1; i < this.list.length; i++) {
            if (this.list[i] < this.list[min]) min = i;
        }
        if (min != index) this.change(min, index);
    }

    get result() {
        for (let i = 0; i < this.list.length - 1; i++) this.sort(i);
        return this.list;
    }

    change(prev, next) {
        var temp = this.list[prev];
        this.list[prev] = this.list[next];
        this.list[next] = temp;
    }
}

module.exports = SelectionSort;
