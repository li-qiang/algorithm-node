"use strict";

let BubbleSort = require('../sorts/bubble-sort');
let expect = require('chai').expect;

let loopTimes = require('./loop-times');

describe("Bubble Sort", () => {

    describe('When elements are little', () => {
        it("should not raise error when no elements", () => {
            var bubbleSorter = new BubbleSort([]);
            expect(bubbleSorter.result).to.deep.equal([]);
        });
        it("should not raise error when only 1 elements", () => {
            var bubbleSorter = new BubbleSort([1]);
            expect(bubbleSorter.result).to.deep.equal([1]);
        });
        it("should sort correctly when only 2 elements", () => {
            var bubbleSorter = new BubbleSort([2, 1]);
            expect(bubbleSorter.result).to.deep.equal([1, 2]);
        });
    });

    it("should actuallySort right", () => {
        let arr = [4, 2, 7, 1, 6, 8, 9, 5, 3];

        var bubbleSorter = new BubbleSort(arr);

        expect(bubbleSorter.result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should sort correctly when some elements are equal', () => {
        let arr = [4, 2, 1, 4, 3, 5, 3];

        var bubbleSorter = new BubbleSort(arr);

        expect(bubbleSorter.result).to.deep.equal([1, 2, 3, 3, 4, 4, 5]);
    });

    it('should handle any random array', () => {
        let randomArr = loopTimes(10000, () => 1 + (Math.random() * 1000).toFixed());
        let actualArr = Object.assign([], randomArr).sort();
        var bubbleSorter = new BubbleSort(randomArr);

        expect(bubbleSorter.result).to.deep.equal(actualArr);
    });
});
