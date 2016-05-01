"use strict";

let QuickSort = require('../sorts/quick-sort');
let expect = require('chai').expect;

let loopTimes = require('./loop-times');

describe("Quick Sort", () => {

    describe('When elements are little', () => {
        it("should not raise error when no elements", () => {
            var quickSorter = new QuickSort([]);
            expect(quickSorter.result).to.deep.equal([]);
        });
        it("should not raise error when only 1 elements", () => {
            var quickSorter = new QuickSort([1]);
            expect(quickSorter.result).to.deep.equal([1]);
        });
        it("should sort correctly when only 2 elements", () => {
            var quickSorter = new QuickSort([2, 1]);
            expect(quickSorter.result).to.deep.equal([1, 2]);
        });
    });

    it("should actuallySort right", () => {
        let arr = [4, 2, 7, 1, 6, 8, 9, 5, 3];

        var quickSorter = new QuickSort(arr);

        expect(quickSorter.result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should sort correctly when some elements are equal', () => {
        let arr = [4, 2, 1, 4, 3, 5, 3];

        var quickSorter = new QuickSort(arr);

        expect(quickSorter.result).to.deep.equal([1, 2, 3, 3, 4, 4, 5]);
    });

    it('should handle any random array', () => {
        let randomArr = loopTimes(10000, () => 1 + (Math.random() * 1000).toFixed());
        let actualArr = Object.assign([], randomArr).sort();
        var quickSorter = new QuickSort(randomArr);

        expect(quickSorter.result).to.deep.equal(actualArr);
    });
});
