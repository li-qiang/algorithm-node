"use strict";


let change = (arr, i, j) => {
    let first = arr[i];
    arr[i] = arr[j];
    arr[j] = first;
};

class QuickSortCore {
    constructor(list) {
        this.prevIndex = 0;
        this.nextIndex = list.length - 1;
        this.baseIndex = list.length - 1;
        this.reversed = false;
        this.list = list;
    }

    get base() {
        return this.list[this.baseIndex];
    }

    get index() {
        return this.reversed ? this.nextIndex : this.prevIndex;
    }

    get currentItem() {
        return this.list[this.index];
    }

    get isContinue() {
        return this.reversed ? this.base < this.currentItem : this.base > this.currentItem;
    }

    get prevList() {
        return this.list.slice(0, this.baseIndex);
    }

    get nextList() {
        return this.list.slice(this.baseIndex + 1);
    }

    increaseIndex() {
        if (this.reversed) {
            return this.isContinue ? this.nextIndex-- : this.prevIndex++;
        }
        return this.isContinue ? this.prevIndex++ : this.nextIndex--;
    }

    change() {
        change(this.list, this.index, this.baseIndex);
        this.baseIndex = this.index;
        this.reversed = !this.reversed;
    }
}

class QuickSort {

    constructor(list) {
        this.list = list;
    }

    get result() {
        return this.sort(this.list);
    }

    sort(list) {
        if (list.length == 1 || list.length == 0)  return list;

        if (list.length == 2) {
            if (list[0] > list[1]) change(list, 0, 1);
            return list;
        }

        return this.actuallySort(list);
    }

    actuallySort(list) {
        let core = new QuickSortCore(list);

        list.forEach(() => {
            if (!core.isContinue) core.change();
            core.increaseIndex();
        });

        return this.subSort(core);
    }

    subSort(core) {
        var prev = core.prevList;
        var next = core.nextList;

        if (prev.length > 1) prev = this.sort(prev);
        if (next.length > 1) next = this.sort(next);

        return prev.concat([core.base]).concat(next);
    }

}


module.exports = QuickSort;