"use strict";

let expect = require('chai').expect;

let loopTimes = require('./loop-times');

let Sorters = ['bubble', 'heap', 'merge', 'quick', 'shell'].map((name) => require(`../sorts/${name}-sort`));

Sorters.forEach((Sorter) => {

    describe(Sorter.name, () => {

        describe('When elements are little', () => {

            it("should not raise error when no elements", () => {
                var sorter = new Sorter([]);
                expect(sorter.result).to.deep.equal([]);
            });
            it("should not raise error when only 1 elements", () => {
                var sorter = new Sorter([1]);
                expect(sorter.result).to.deep.equal([1]);
            });
            it("should sort correctly when only 2 elements", () => {
                var sorter = new Sorter([2, 1]);
                expect(sorter.result).to.deep.equal([1, 2]);
            });
        });

        it("should actuallySort right", () => {
            let arr = [4, 2, 7, 1, 6, 8, 9, 5, 3];

            var sorter = new Sorter(arr);

            expect(sorter.result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });

        it('should sort correctly when some elements are equal', () => {
            let arr = [4, 2, 1, 4, 3, 5, 3];

            var sorter = new Sorter(arr);

            expect(sorter.result).to.deep.equal([1, 2, 3, 3, 4, 4, 5]);
        });

        it('should handle any random array', () => {
            let randomArr = loopTimes(10000, () => 1 + (Math.random() * 1000).toFixed());
            let actualArr = Object.assign([], randomArr).sort();
            var sorter = new Sorter(randomArr);

            expect(sorter.result).to.deep.equal(actualArr);
        });
    });

});

