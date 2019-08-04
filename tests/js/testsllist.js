describe('HomeWork 02.08.2019', () => {
    describe('toString', () => {
        const testData = [
            {
                llist: new LList(),
                mass: [],
                expected: '',
            },
            {
                llist: new LList(),
                mass: [1],
                expected: '1',
            },
            {
                llist: new LList(),
                mass: [1, 6],
                expected: '1, 6',
            },
            {
                llist: new LList(),
                mass: [7, 5, 9, 6, 4],
                expected: '7, 5, 9, 6, 4',
            },
        ];

        testData.forEach(data => {
            const {llist, mass, expected} = data;
            mass.forEach(temp => {
                llist.push(temp);
            });

            const actual = llist.toString();

            it(`should return '${expected}' and list '${llist.toString()}' when init list = [${mass}]`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('toArray', () => {
        const testData = [
            {
                llist: new LList(),
                mass: [],
                expected: [],
            },
            {
                llist: new LList(),
                mass: [1],
                expected: [1],
            },
            {
                llist: new LList(),
                mass: [1, 6],
                expected: [1, 6],
            },
            {
                llist: new LList(),
                mass: [7, 5, 9, 6, 4],
                expected: [7, 5, 9, 6, 4],
            },
        ];

        testData.forEach(data => {
            const {llist, mass, expected} = data;
            mass.forEach(temp => {
                llist.push(temp);
            });

            const actual = llist.toArray();

            it(`should return [${expected}] and list '${llist.toString()}' when init list = [${mass}]`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('getSize', () => {
        const testData = [
            {
                llist: new LList(),
                mass: [],
                expected: 0,
            },
            {
                llist: new LList(),
                mass: [1],
                expected: 1,
            },
            {
                llist: new LList(),
                mass: [1, 6],
                expected: 2,
            },
            {
                llist: new LList(),
                mass: [7, 5, 9, 6, 4],
                expected: 5,
            },
        ];

        testData.forEach(data => {
            const {llist, mass, expected} = data;
            mass.forEach(temp => {
                llist.push(temp);
            });

            const actual = llist.getSize();

            it(`should return '${expected}' when init list = [${mass}]`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('init', () => {
        const testData = [
            {
                llist: new LList(),
                mass: [],
                expected: 0,
            },
            {
                llist: new LList(),
                mass: [1],
                expected: 1,
            },
            {
                llist: new LList(),
                mass: [1, 6],
                expected: 2,
            },
            {
                llist: new LList(),
                mass: [7, 5, 9, 6, 4],
                expected: 5,
            },
        ];

        testData.forEach(data => {
            const {llist, mass, expected} = data;

            const actual = llist.init(mass);

            it(`should return '${expected}' when init list = [${mass}]`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('push', () => {
        const testData = [
            {
                llist: new LList(),
                mass: [],
                element: 3,
                expected: 1,
            },
            {
                llist: new LList(),
                mass: [1],
                element: 2,
                expected: 2,
            },
            {
                llist: new LList(),
                mass: [1, 6],
                element: 8,
                expected: 3,
            },
            {
                llist: new LList(),
                mass: [2, 6, 9, 6 ,7],
                element: 8,
                expected: 6,
            },
        ];

        testData.forEach(data => {
            const {llist, mass, element, expected} = data;
            mass.forEach(temp => {
                llist.push(temp);
            });

            const actual = llist.push(element);

            it(`should return '${expected}' and list '${llist.toString()}' when init list = [${mass}], element = ${element}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('pop', () => {
        const testData = [
            {
                llist: new LList(),
                mass: [],
                expected: undefined,
            },
            {
                llist: new LList(),
                mass: [1],
                expected: 1,
            },
            {
                llist: new LList(),
                mass: [3, 6],
                expected: 6,
            },
            {
                llist: new LList(),
                mass: [2, 6, 9, 6 ,7],
                expected: 7,
            },
        ];

        testData.forEach(data => {
            const {llist, mass, expected} = data;
            mass.forEach(temp => {
                llist.push(temp);
            });

            const actual = llist.pop();

            it(`should return '${expected}' and list '${llist.toString()}' when init list = [${mass}]`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('unshift', () => {
        const testData = [
            {
                llist: new LList(),
                mass: [],
                element: 3,
                expected: 1,
            },
            {
                llist: new LList(),
                mass: [1],
                element: 2,
                expected: 2,
            },
            {
                llist: new LList(),
                mass: [1, 6],
                element: 8,
                expected: 3,
            },
            {
                llist: new LList(),
                mass: [2, 6, 9, 6 ,7],
                element: 8,
                expected: 6,
            },
        ];

        testData.forEach(data => {
            const {llist, mass, element, expected} = data;
            mass.forEach(temp => {
                llist.push(temp);
            });

            const actual = llist.unshift(element);

            it(`should return '${expected}' and list '${llist.toString()}' when init list = [${mass}], element = ${element}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('shift', () => {
        const testData = [
            {
                llist: new LList(),
                mass: [],
                expected: undefined,
            },
            {
                llist: new LList(),
                mass: [1],
                expected: 1,
            },
            {
                llist: new LList(),
                mass: [3, 6],
                expected: 3,
            },
            {
                llist: new LList(),
                mass: [2, 6, 9, 6 ,7],
                expected: 2,
            },
        ];

        testData.forEach(data => {
            const {llist, mass, expected} = data;
            mass.forEach(temp => {
                llist.push(temp);
            });

            const actual = llist.shift();

            it(`should return '${expected}' and list '${llist.toString()}' when init list = [${mass}]`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('sort', () => {
        const testData = [
            {
                llist: new LList(),
                mass: [],
                expected: '',
            },
            {
                llist: new LList(),
                mass: [1],
                expected: '1',
            },
            {
                llist: new LList(),
                mass: [6, 3],
                expected: '3, 6',
            },
            {
                llist: new LList(),
                mass: [2, 6, 9, 6 ,7],
                expected: '2, 6, 6, 7, 9',
            },
        ];

        testData.forEach(data => {
            const {llist, mass, expected} = data;
            mass.forEach(temp => {
                llist.push(temp);
            });

            llist.sort();
            const actual = llist.toString();

            it(`should return '${expected}' and list '${llist.toString()}' when init list = [${mass}]`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('set', () => {
        const testData = [
            {
                llist: new LList(),
                mass: [],
                index: 1,
                element: 2,
            },
            {
                llist: new LList(),
                mass: [1],
                index: 1,
                element: 2,
            },
            {
                llist: new LList(),
                mass: [6, 3],
                index: 1,
                element: 2,
            },
            {
                llist: new LList(),
                mass: [2, 6, 9, 6 ,7],
                index: 3,
                element: 2,
            },
        ];

        testData.forEach(data => {
            const {llist, mass, index, element} = data;
            mass.forEach(temp => {
                llist.push(temp);
            });

            const actual = llist.set(index, element);

            it(`should get list '${llist.toString()}' after set element ${element} in index ${index} when init list = [${mass}]`, () => {
                assert.strictEqual(actual, undefined);
            });
        });
    });

    describe('get', () => {
        const testData = [
            {
                llist: new LList(),
                mass: [],
                index: 0,
                expected: undefined,
            },
            {
                llist: new LList(),
                mass: [1],
                index: 1,
                expected: 1,
            },
            {
                llist: new LList(),
                mass: [6, 3],
                index: 1,
                expected: 6,
            },
            {
                llist: new LList(),
                mass: [2, 6, 9, 6 ,7],
                index: 3,
                expected: 9,
            },
        ];

        testData.forEach(data => {
            const {llist, mass, index, expected} = data;
            mass.forEach(temp => {
                llist.push(temp);
            });

            const actual = llist.get(index);

            it(`should return ${expected} when list = '${llist.toString()}' and index = ${index}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('slice', () => {
        const testData = [
            {
                llist: new LList(),
                mass: [],
                begin: 0,
                end: 1,
                expected: undefined,
            },
            {
                llist: new LList(),
                mass: [1],
                begin: 1,
                end: 1,
                expected: [],
            },
            {
                llist: new LList(),
                mass: [6, 3],
                begin: 1,
                end: 2,
                expected: [6],
            },
            {
                llist: new LList(),
                mass: [2, 6, 9, 6 ,7],
                begin: 1,
                end: 3,
                expected: [2, 6],
            },
            {
                llist: new LList(),
                mass: [2, 6, 9, 6 ,7],
                begin: 1,
                expected: [2, 6, 9, 6 ,7],
            },
            {
                llist: new LList(),
                mass: [2, 6, 9, 6 ,7],
                begin: 3,
                expected: [9, 6 ,7],
            },
        ];

        testData.forEach(data => {
            const {llist, mass, begin, end, expected} = data;
            mass.forEach(temp => {
                llist.push(temp);
            });

            const actual = llist.slice(begin, end);

            it(`should return ${expected} and list = '${llist.toString()}' when init mass = [${mass}] and begin = ${begin}, end = ${end}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('splice', () => {
        const testData = [
            {
                llist: new LList(),
                mass: [],
                begin: 0,
                count: 1,
                expected: undefined,
            },
            {
                llist: new LList(),
                mass: [1],
                begin: 1,
                count: 1,
                expected: [1],
            },
            {
                llist: new LList(),
                mass: [6, 3],
                begin: 1,
                count: 2,
                expected: [6, 3],
            },
            {
                llist: new LList(),
                mass: [2, 6, 9, 6 ,7],
                begin: 2,
                count: 3,
                expected: [6, 9, 6],
            },
            {
                llist: new LList(),
                mass: [2, 6, 9, 6 ,7],
                begin: 1,
                count: 2,
                expected: [2, 6],
            },
        ];

        testData.forEach(data => {
            const {llist, mass, begin, count, expected} = data;
            mass.forEach(temp => {
                llist.push(temp);
            });

            const actual = llist.splice(begin, count);

            it(`should return ${expected} and list = '${llist.toString()}' when init mass = [${mass}] and begin = ${begin}, count = ${count}`, () => {
                assert.deepEqual(actual, expected);
            });
        });

        const test = [
            {
                llist: new LList(),
                mass: [2, 6, 9, 6 ,7],
                begin: 2,
                count: 3,
                element1: 10,
                element2: 11,
                element3: 14,
                expected: [6, 9, 6],
            },
            {
                llist: new LList(),
                mass: [2, 6, 9, 6 ,7],
                begin: 1,
                count: 2,
                element1: 10,
                element2: 11,
                element3: 14,
                expected: [2, 6],
            },
        ];

        test.forEach(data => {
            const {llist, mass, begin, count, element1, element2, element3, expected} = data;
            mass.forEach(temp => {
                llist.push(temp);
            });

            const actual = llist.splice(begin, count, element1, element2, element3);

            it(`should return ${expected} and list = '${llist.toString()}' when init mass = [${mass}] and begin = ${begin}, count = ${count}, elements for insert = ${element1}, ${element2}, ${element3}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });
});