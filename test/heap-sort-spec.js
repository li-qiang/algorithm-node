"use strict";

let HeapSort = require('../sorts/heap-sort');
let expect = require('chai').expect;

let loopTimes = require('./loop-times');

describe("Heap Sort", () => {

    describe('When elements are little', () => {
        it("should not raise error when no elements", () => {
            var heapSorter = new HeapSort([]);
            expect(heapSorter.result).to.deep.equal([]);
        });
        it("should not raise error when only 1 elements", () => {
            var heapSorter = new HeapSort([1]);
            expect(heapSorter.result).to.deep.equal([1]);
        });
        it("should sort correctly when only 2 elements", () => {
            var quickSorter = new HeapSort([2, 1]);
            expect(quickSorter.result).to.deep.equal([1, 2]);
        });
    });

    it("should actuallySort right", () => {
        let arr = [4, 2, 7, 1, 6, 8, 9, 5, 3];

        var heapSorter = new HeapSort(arr);

        expect(heapSorter.result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should sort correctly when some elements are equal', () => {
        let arr = [4, 2, 1, 4, 3, 5, 3];

        var heapSorter = new HeapSort(arr);

        expect(heapSorter.result).to.deep.equal([1, 2, 3, 3, 4, 4, 5]);
    });

    it('should handle any random array', () => {
        let randomArr = loopTimes(10000, () => 1 + (Math.random() * 1000).toFixed());
        let actualArr = Object.assign([], randomArr).sort();
        var heapSorter = new HeapSort(randomArr);

        expect(heapSorter.result).to.deep.equal(actualArr);
    });
});
