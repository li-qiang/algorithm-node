"use strict";

let change = (arr, i, j) => {
    let first = arr[i];
    arr[i] = arr[j];
    arr[j] = first;
};

class QuickSortCore {
    constructor(list, start, end) {
        this.prevIndex = start;
        this.nextIndex = end;
        this.baseIndex = end;
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
        return this.sort(this.list, 0, this.list.length - 1);
    }

    sort(list, start, end) {
        if (end == start) return list;
        return this.actuallySort(list, start, end);
    }

    actuallySort(list, start, end) {
        let core = new QuickSortCore(list, start, end);

        for (let i = start; i <= end; i++) {
            if (!core.isContinue) core.change();
            core.increaseIndex();
        }

        return this.subSort(core, start, end);
    }

    subSort(core, start, end) {
        if (core.baseIndex - start > 1) this.sort(core.list, start, core.baseIndex - 1);
        if (end - core.baseIndex > 1) this.sort(core.list, core.baseIndex + 1, end);
        return this.list;
    }

}


module.exports = QuickSort;