"use strict";
let expect = require('chai').expect;
let loopTimes = require('./loop-times');

let QuickSort = require('../sorts/quick-sort');
let HeapSort = require('../sorts/heap-sort');
let MergeSort = require('../sorts/merge-sort');
let ShellSort = require('../sorts/shell-sort');
let BubbleSort = require('../sorts/bubble-sort');

describe('Compare', () => {

    let randomArr = loopTimes(10000, () => 1 + (Math.random() * 1000).toFixed()),
        sortedArr = Object.assign([], randomArr).sort(),
        originArr;

    beforeEach(() => originArr = Object.assign([], randomArr));

    it('sort by quick sort', () => {
        let quickSorter = new QuickSort(originArr);

        expect(quickSorter.result).to.deep.equal(sortedArr);
    });

    it('sort by heap sort', () => {
        let heapSorter = new HeapSort(originArr);

        expect(heapSorter.result).to.deep.equal(sortedArr);
    });

    it('sort by merge sort', () => {
        let mergeSorter = new MergeSort(originArr);

        expect(mergeSorter.result).to.deep.equal(sortedArr);
    });

    it('sort by shell sort', () => {
        let shellSorter = new ShellSort(originArr);

        expect(shellSorter.result).to.deep.equal(sortedArr);
    });

    it('sort by bubble sort', () => {
        let bubbleSorter = new BubbleSort(originArr);

        expect(bubbleSorter.result).to.deep.equal(sortedArr);
    });
});