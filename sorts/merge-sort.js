"use strict";

class MergeSort {

    constructor(list) {
        this.list = list;
    }

    get result() {
        if (this.list.length == 0) return this.list;
        if (this.list.length % 2 == 1) this.list[0] = [this.list[0]];
        let initSortedList = this.sort(this.list, this.mergeSingle);
        while (initSortedList.length > 1) {
            initSortedList = this.sort(initSortedList, this.merge.bind(this));
        }
        return initSortedList[0];
    }

    sort(list, method) {
        let startIndex = list.length % 2,
            sortedList = startIndex == 0 ? [] : [list[0]];

        for (let i = startIndex; i < list.length;) {
            sortedList.push(method(list[i++], list[i++]));
        }
        return sortedList;
    }

    mergeSingle(prev, next) {
        return prev > next ? [next, prev] : [prev, next];
    }

    concat(list, index, result) {
        let position = result.length;
        for (let i = index; i < list.length; i++) {
            result[position++] = list[i];
        }
    }

    merge(prev, next) {
        let prevIndex = 0,
            nextIndex = 0,
            final = [];
        for (let i = 0; i < prev.length + next.length; i++) {
            if (prev[prevIndex] > next[nextIndex]) {
                final[i] = next[nextIndex];
                nextIndex++;
            } else {
                final[i] = prev[prevIndex];
                prevIndex++;
            }
            if (prevIndex == prev.length) {
                this.concat(next, nextIndex, final);
                break;
            }
            if (nextIndex == next.length) {
                this.concat(prev, prevIndex, final);
                break;
            }
        }

        return final;
    }

}

module.exports = MergeSort;