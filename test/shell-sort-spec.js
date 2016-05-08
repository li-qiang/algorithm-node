"use strict";

let ShellSort = require('../sorts/shell-sort');
let expect = require('chai').expect;

let loopTimes = require('./loop-times');

describe("Shell Sort", () => {

    describe('When elements are little', () => {
        it("should not raise error when no elements", () => {
            var shellSorter = new ShellSort([]);
            expect(shellSorter.result).to.deep.equal([]);
        });
        it("should not raise error when only 1 elements", () => {
            var shellSorter = new ShellSort([1]);
            expect(shellSorter.result).to.deep.equal([1]);
        });
        it("should sort correctly when only 2 elements", () => {
            var shellSorter = new ShellSort([2, 1]);
            expect(shellSorter.result).to.deep.equal([1, 2]);
        });
    });

    it("should actuallySort right", () => {
        let arr = [4, 2, 7, 1, 6, 8, 9, 5, 3];

        var shellSorter = new ShellSort(arr);

        expect(shellSorter.result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should sort correctly when some elements are equal', () => {
        let arr = [4, 2, 1, 4, 3, 5, 3];

        var shellSorter = new ShellSort(arr);

        expect(shellSorter.result).to.deep.equal([1, 2, 3, 3, 4, 4, 5]);
    });

    it('should handle any random array', () => {
        let randomArr = loopTimes(10000, () => 1 + (Math.random() * 1000).toFixed());
        let actualArr = Object.assign([], randomArr).sort();
        var shellSorter = new ShellSort(randomArr);

        expect(shellSorter.result).to.deep.equal(actualArr);
    });
});
