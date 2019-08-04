describe('AList Tests', () => {
    describe('init', () => {
        const testData = [
            {
                arr: new AList(),
                mass: [],
                expected: [],
            },
            {
                arr: new AList(),
                mass: [1],
                expected: [1],
            },
            {
                arr: new AList(),
                mass: [1, 6],
                expected: [1, 6],
            },
            {
                arr: new AList(),
                mass: [7, 5, 9, 6, 4],
                expected: [7, 5, 9, 6, 4],
            },
        ];

        testData.forEach(data => {
            const {arr, mass, expected} = data;

            const actual = arr.init(mass);

            it(`should return [${expected}] when initial mass = [${mass}]`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('toArray', () => {
        const testData = [
            {
                arr: new AList(),
                mass: [],
                expected: [],
            },
            {
                arr: new AList(),
                mass: [1],
                expected: [1],
            },
            {
                arr: new AList(),
                mass: [1, 6],
                expected: [1, 6],
            },
            {
                arr: new AList(),
                mass: [7, 5, 9, 6, 4],
                expected: [7, 5, 9, 6, 4],
            },
        ];

        testData.forEach(data => {
            const {arr, mass, expected} = data;
            arr.init(mass);
            const actual = arr.toArray();

            it(`should return [${expected}] when initial mass = [${mass}]`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('toString', () => {
        const testData = [
            {
                arr: new AList(),
                mass: [],
                expected: '[]',
            },
            {
                arr: new AList(),
                mass: [1],
                expected: '[1]',
            },
            {
                arr: new AList(),
                mass: [1, 6],
                expected: '[1, 6]',
            },
            {
                arr: new AList(),
                mass: [7, 5, 9, 6, 4],
                expected: '[7, 5, 9, 6, 4]',
            },
        ];

        testData.forEach(data => {
            const {arr, mass, expected} = data;
            arr.init(mass);
            const actual = arr.toString();

            it(`should return ${expected} when arr = ${arr}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('getSize', () => {
        const testData = [
            {
                arr: new AList(),
                mass: [],
                expected: 0,
            },
            {
                arr: new AList(),
                mass: [1],
                expected: 1,
            },
            {
                arr: new AList(),
                mass: [1, 6],
                expected: 2,
            },
            {
                arr: new AList(),
                mass: [7, 5, 9, 6, 4],
                expected: 5,
            },
        ];

        testData.forEach(data => {
            const {arr, mass, expected} = data;
            arr.init(mass);
            const actual = arr.getSize();

            it(`should return ${expected} when arr = ${arr}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('push', () => {
        const testData = [
            {
                arr: new AList(),
                mass: [],
                element: 2,
                expected: 1,
            },
            {
                arr: new AList(),
                mass: [1],
                element: 3,
                expected: 2,
            },
            {
                arr: new AList(),
                mass: [1, 6],
                element: 3,
                expected: 3,
            },
            {
                arr: new AList(),
                mass: [7, 5, 9, 6, 4],
                element: -2,
                expected: 6,
            },
        ];

        testData.forEach(data => {
            const {arr, mass, element, expected} = data;
            arr.init(mass);
            const actual = arr.push(element);

            it(`should return ${expected} and result arr ${arr} when initial arr = [${mass}], element = ${element}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('pop', () => {
        const testData = [
            {
                arr: new AList(),
                mass: [],
                expected: undefined,
            },
            {
                arr: new AList(),
                mass: [1],
                expected: 1,
            },
            {
                arr: new AList(),
                mass: [1, 6],
                expected: 6,
            },
            {
                arr: new AList(),
                mass: [7, 5, 9, 6, 4],
                expected: 4,
            },
        ];

        testData.forEach(data => {
            const {arr, mass, expected} = data;
            arr.init(mass);
            const actual = arr.pop();

            it(`should return ${expected} and result arr ${arr} when initial arr = [${mass}]`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('unshift', () => {
        const testData = [
            {
                arr: new AList(),
                mass: [],
                element: 2,
                expected: 1,
            },
            {
                arr: new AList(),
                mass: [1],
                element: 3,
                expected: 2,
            },
            {
                arr: new AList(),
                mass: [1, 6],
                element: 3,
                expected: 3,
            },
            {
                arr: new AList(),
                mass: [7, 5, 9, 6, 4],
                element: -2,
                expected: 6,
            },
        ];

        testData.forEach(data => {
            const {arr, mass, element, expected} = data;
            arr.init(mass);
            const actual = arr.unshift(element);

            it(`should return ${expected} and result arr ${arr} when initial arr = [${mass}], element = ${element}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('shift', () => {
        const testData = [
            {
                arr: new AList(),
                mass: [],
                expected: undefined,
            },
            {
                arr: new AList(),
                mass: [1],
                expected: 1,
            },
            {
                arr: new AList(),
                mass: [1, 6],
                expected: 1,
            },
            {
                arr: new AList(),
                mass: [7, 5, 9, 6, 4],
                expected: 7,
            },
        ];

        testData.forEach(data => {
            const {arr, mass, expected} = data;
            arr.init(mass);
            const actual = arr.shift();

            it(`should return ${expected} and result arr ${arr} when initial arr = [${mass}]`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('sort', () => {
        const testData = [
            {
                arr: new AList(),
                mass: [],
                expected: -1,
            },
            {
                arr: new AList(),
                mass: [1],
                expected: [1],
            },
            {
                arr: new AList(),
                mass: [9, 6],
                expected: [6, 9],
            },
            {
                arr: new AList(),
                mass: [7, 5, 9, 6, 4],
                expected: [4, 5, 6, 7, 9],
            },
        ];

        testData.forEach(data => {
            const {arr, mass, expected} = data;
            arr.init(mass);
            const actual = arr.sort();

            it(`should return [${expected}] when initial arr = [${mass}]`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('set', () => {
        const testData = [
            {
                arr: new AList(),
                mass: [],
                index: 0,
                element: 1,
                expected: [1],
            },
            {
                arr: new AList(),
                mass: [1],
                index: 1,
                element: 2,
                expected: [1, 2],
            },
            {
                arr: new AList(),
                mass: [9, 6],
                index: 1,
                element: 2,
                expected: [9, 2],
            },
            {
                arr: new AList(),
                mass: [7, 5, 9, 6, 4],
                index: 3,
                element: 10,
                expected: [7, 5, 9, 10, 4],
            },
        ];

        testData.forEach(data => {
            const {arr, mass, index, element, expected} = data;
            arr.init(mass);
            const actual = arr.set(index, element);

            it(`should return [${expected}] when initial arr = [${mass}], index = ${index}, element = ${element}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('get', () => {
        const testData = [
            {
                arr: new AList(),
                mass: [],
                index: 0,
                expected: undefined,
            },
            {
                arr: new AList(),
                mass: [1],
                index: 0,
                expected: 1,
            },
            {
                arr: new AList(),
                mass: [9, 6],
                index: 1,
                expected: 6,
            },
            {
                arr: new AList(),
                mass: [7, 5, 9, 6, 4],
                index: 3,
                expected: 6,
            },
        ];

        testData.forEach(data => {
            const {arr, mass, index, expected} = data;
            arr.init(mass);
            const actual = arr.get(index);

            it(`should return ${expected} when arr = [${mass}] and index = ${index}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('slice', () => {
        const testData = [
            {
                arr: new AList(),
                mass: [],
                begin: 0,
                end: 2,
                expected: [],
            },
            {
                arr: new AList(),
                mass: [1],
                begin: 0,
                end: 1,
                expected: [1],
            },
            {
                arr: new AList(),
                mass: [9, 6],
                begin: 0,
                end: 1,
                expected: [9],
            },
            {
                arr: new AList(),
                mass: [7, 5, 9, 6, 4],
                begin: 1,
                end: 3,
                expected: [5, 9],
            },
        ];

        testData.forEach(data => {
            const {arr, mass, begin, end, expected} = data;
            arr.init(mass);
            const actual = arr.slice(begin, end);

            it(`should return [${expected}] and result arr = ${arr} when initial arr = [${mass}] and begin = ${begin}, end = ${end}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('splice', () => {
        const testData = [
            {
                arr: new AList(),
                mass: [],
                begin: 0,
                count: 2,
                expected: [],
            },
            {
                arr: new AList(),
                mass: [1],
                begin: 0,
                count: 1,
                expected: [1],
            },
        ];

        testData.forEach(data => {
            const {arr, mass, begin, count, expected} = data;
            arr.init(mass);
            const actual = arr.splice(begin, count);

            it(`should return [${expected}] and result arr = ${arr} when initial arr = [${mass}] and begin = ${begin}, count = ${count}`, () => {
                assert.deepEqual(actual, expected);
            });
        });

        const testDataWithElement = [
            {
                arr: new AList(),
                mass: [9, 6],
                begin: 1,
                count: 1,
                element1: 10,
                element2: 11,
                element3: 12,
                expected: [6],
            },
            {
                arr: new AList(),
                mass: [7, 5, 9, 6, 4],
                begin: 1,
                count: 4,
                element1: 10,
                element2: 11,
                element3: 12,
                expected: [5, 9, 6, 4],
            },
            {
                arr: new AList(),
                mass: [7, 5, 9, 6, 4],
                begin: 1,
                count: 3,
                element1: 10,
                element2: 11,
                element3: 12,
                expected: [5, 9, 6],
            },
        ];

        testDataWithElement.forEach(data => {
            const {arr, mass, begin, count, element1, element2, element3, expected} = data;
            arr.init(mass);
            const actual = arr.splice(begin, count, element1, element2, element3);

            it(`should return [${expected}] and result arr = ${arr} when initial arr = [${mass}] and begin = ${begin}, count = ${count}, element for insert = ${element1}, ${element2}, ${element3}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });
});

describe('AList tests', function () {
    describe('push tests', function() {
        let alist;

        beforeEach(() => {
            alist = new AList();
        });

        it('should return 0 if undefined is pushed', function () {
            //Given
            const value = undefined;
            const expected = 0;

            //When
            const actual = alist.push(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 0 if null is pushed', function () {
            //Given
            const value = null;
            const expected = 0;

            //When
            const actual = alist.push(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 1 if one element is pushed', function () {
            //Given
            const value = 27;
            const expected = 1;

            //When
            const actual = alist.push(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 1 if one element is pushed (0)', function () {
            //Given
            const value = 0;
            const expected = 1;

            //When
            const actual = alist.push(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 1 if one element is pushed (-14)', function () {
            //Given
            const value = -14;
            const expected = 1;

            //When
            const actual = alist.push(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 2 if one element is pushed (14) to [0]', function () {
            //Given
            alist.init([0]);

            const value = 14;
            const expected = 2;

            //When
            const actual = alist.push(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 3 if one element is pushed (14) to [-27, 0]', function () {
            //Given
            alist.init([-27, 0]);

            const value = 14;
            const expected = 3;

            //When
            const actual = alist.push(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 5 if one element is pushed (14) to [-27, 0, 5, 36, 9]', function () {
            //Given
            alist.init([-27, 0, 5, 36, 9]);

            const value = 14;
            const expected = 6;

            //When
            const actual = alist.push(value);

            //Then
            assert.deepEqual(actual, expected);
        });
    });

    describe('init, getSize tests', function() {
        let alist;

        beforeEach(() => {
            alist = new AList();
        });

        it('should set nothing if undefined is initialized', function () {
            //Given
            const value = undefined;
            const expected = 0;

            //When
            alist.init(value);

            //Then
            assert.deepEqual(alist.getSize(), expected);
        });

        it('should set nothing if null is initialized', function () {
            //Given
            const value = null;
            const expected = 0;

            //When
            alist.init(value);

            //Then
            assert.deepEqual(alist.getSize(), expected);
        });

        it('should set nothing if [] is initialized', function () {
            //Given
            const value = [];
            const expected = 0;

            //When
            alist.init(value);

            //Then
            assert.deepEqual(alist.getSize(), expected);
        });

        it('should set alist if [0] is initialized', function () {
            //Given
            const value = [0];
            const expected = 1;

            //When
            alist.init(value);

            //Then
            assert.deepEqual(alist.getSize(), expected);
        });

        it('should set alist if [27] is initialized', function () {
            //Given
            const value = [0];
            const expected = 1;

            //When
            alist.init(value);

            //Then
            assert.deepEqual(alist.getSize(), expected);
        });

        it('should set alist if [-14] is initialized', function () {
            //Given
            const value = [0];
            const expected = 1;

            //When
            alist.init(value);

            //Then
            assert.deepEqual(alist.getSize(), expected);
        });

        it('should set alist if [-27, 0] is initialized', function () {
            //Given
            const value = [-27, 0];
            const expected = 2;

            //When
            alist.init(value);

            //Then
            assert.deepEqual(alist.getSize(), expected);
        });

        it('should set alist if [-27, 0, 5, 36, 9] is initialized', function () {
            //Given
            const value = [-27, 0, 5, 36, 9];
            const expected = 5;

            //When
            alist.init(value);

            //Then
            assert.deepEqual(alist.getSize(), expected);
        });
    });

    describe('toString tests', function() {
        let alist;

        beforeEach(() => {
            alist = new AList();
        });

        it('should return "[]" if undefined is set', function () {
            //Given
            alist.init();
            const expected = "[]";

            //When
            const actual = alist.toString();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return "[]" if null is set', function () {
            //Given
            alist.init(null);
            const expected = "[]";

            //When
            const actual = alist.toString();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return "[]" if [] is set', function () {
            //Given
            alist.init([]);
            const expected = "[]";

            //When
            const actual = alist.toString();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return "[0]" if [0] is set', function () {
            //Given
            alist.init([0]);
            const expected = "[0]";

            //When
            const actual = alist.toString();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return "[0, -14]" if [0, -14] is set', function () {
            //Given
            alist.init([0, -14]);
            const expected = "[0, -14]";

            //When
            const actual = alist.toString();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return "[0, -14, 22]" if [0, -14, 22] is set', function () {
            //Given
            alist.init([0, -14, 22]);
            const expected = "[0, -14, 22]";

            //When
            const actual = alist.toString();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return "[0, -14, 22, 0, 33]" if [0, -14, 22, 0, 33] is set', function () {
            //Given
            alist.init([0, -14, 22, 0, 33]);
            const expected = "[0, -14, 22, 0, 33]";

            //When
            const actual = alist.toString();

            //Then
            assert.deepEqual(actual, expected);
        });
    });

    describe('pop() tests', function() {
        let alist;

        beforeEach(() => {
            alist = new AList();
        });

        it('should return undefined if undefined is initialized', function () {
            //Given
            alist.init();
            const expected = undefined;
            const expectedSize = 0;

            //When
            const actual = alist.pop();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return undefined if null is initialized', function () {
            //Given
            alist.init(null);
            const expected = undefined;

            //When
            const actual = alist.pop();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return undefined if [] is initialized', function () {
            //Given
            alist.init([]);
            const expected = undefined;
            const expectedSize = 0;

            //When
            const actual = alist.pop();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return 0 if [0] is initialized', function () {
            //Given
            alist.init([0]);
            const expected = 0;
            const expectedSize = 0;

            //When
            const actual = alist.pop();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return -10 if [0, -10] is initialized', function () {
            //Given
            alist.init([0, -10]);
            const expected = -10;
            const expectedSize = 1;

            //When
            const actual = alist.pop();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return 27 if [0, -10, 27] is initialized', function () {
            //Given
            alist.init([0, -10, 27]);
            const expected = 27;
            const expectedSize = 2;

            //When
            const actual = alist.pop();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return 27 if [0, -10, 5, 0, 27] is initialized', function () {
            //Given
            alist.init([0, -10, 5, 0, 27]);
            const expected = 27;
            const expectedSize = 4;

            //When
            const actual = alist.pop();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });
    });

    describe('shift() tests', function() {
        let alist;

        beforeEach(() => {
            alist = new AList();
        });

        it('should return undefined if undefined is initialized', function () {
            //Given
            alist.init();
            const expected = undefined;
            const expectedSize = 0;

            //When
            const actual = alist.shift();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return undefined if null is initialized', function () {
            //Given
            alist.init(null);
            const expected = undefined;
            const expectedSize = 0;

            //When
            const actual = alist.shift();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return undefined if [] is initialized', function () {
            //Given
            alist.init([]);
            const expected = undefined;
            const expectedSize = 0;

            //When
            const actual = alist.shift();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return 0 if [0] is initialized', function () {
            //Given
            alist.init([0]);
            const expected = 0;
            const expectedSize = 0;

            //When
            const actual = alist.shift();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return 0 if [27, -10] is initialized', function () {
            //Given
            alist.init([27, -10]);
            const expected = 27;
            const expectedSize = 1;

            //When
            const actual = alist.shift();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return 0 if [8, 0, 27, -10, 3] is initialized', function () {
            //Given
            alist.init([8, 0, 27, -10, 3]);
            const expected = 8;
            const expectedSize = 4;

            //When
            const actual = alist.shift();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });
    });

    describe('unshift() tests', function() {
        let alist;

        beforeEach(() => {
            alist = new AList();
        });

        it('should return 0 if undefined is unshifted (init - undefined)', function () {
            //Given
            alist.init();
            const expected = 0;
            const expectedSize = 0;

            //When
            const actual = alist.unshift();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return 0 if null is unshifted (null - undefined)', function () {
            //Given
            alist.init(null);
            const expected = 0;
            const expectedSize = 0;

            //When
            const actual = alist.unshift();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return 1 if 0 is unshifted ([])', function () {
            //Given
            alist.init([]);
            const expected = 1;
            const expectedSize = 1;

            //When
            const actual = alist.unshift(0);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return 1 if -2 is unshifted ([])', function () {
            //Given
            alist.init([]);
            const expected = 1;
            const expectedSize = 1;

            //When
            const actual = alist.unshift(-2);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return 3 if 27 is unshifted ([0, 8])', function () {
            //Given
            alist.init([0, 8]);
            const expected = 3;
            const expectedSize = 3;

            //When
            const actual = alist.unshift(27);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return 6 if 27 is unshifted ([0, 8, 4, 99, 6])', function () {
            //Given
            alist.init([0, 8, 4, 99, 6]);
            const expected = 6;
            const expectedSize = 6;

            //When
            const actual = alist.unshift(27);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });
    });

    describe('slice() tests', function() {
        let alist;

        beforeEach(() => {
            alist = new AList();
        });

        it('should return [] if start index is undefined from undefined', function () {
            //Given
            alist.init();
            const expected = [];
            const expectedSize = 0;

            //When
            const actual = alist.slice();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return [] if start index is 0 from undefined', function () {
            //Given
            alist.init();
            const expected = [];
            const expectedSize = 0;

            //When
            const actual = alist.slice(0);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return [] if start index is 0, end is 2 from undefined', function () {
            //Given
            alist.init();
            const expected = [];
            const expectedSize = 0;

            //When
            const actual = alist.slice(0, 2);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return [] if start index is undefined from null', function () {
            //Given
            alist.init(null);
            const expected = [];
            const expectedSize = 0;

            //When
            const actual = alist.slice();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return [] if start index is 0 from null', function () {
            //Given
            alist.init(null);
            const expected = [];
            const expectedSize = 0;

            //When
            const actual = alist.slice(0);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return [] if start index is 0, end is 2 from null', function () {
            //Given
            alist.init(null);
            const expected = [];
            const expectedSize = 0;

            //When
            const actual = alist.slice(0, 2);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return [] if start index is undefined from []', function () {
            //Given
            alist.init([]);
            const expected = [];
            const expectedSize = 0;

            //When
            const actual = alist.slice();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return [] if start index is 0 from []', function () {
            //Given
            alist.init([]);
            const expected = [];
            const expectedSize = 0;

            //When
            const actual = alist.slice(0);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return [] if start index is 0, end is 2 from []', function () {
            //Given
            alist.init([]);
            const expected = [];
            const expectedSize = 0;

            //When
            const actual = alist.slice(0, 2);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return [0] if start index is undefined from [0]', function () {
            //Given
            alist.init([0]);
            const expected = [0];
            const expectedSize = 1;

            //When
            const actual = alist.slice();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return [0] if start index is 0 from [0]', function () {
            //Given
            alist.init([0]);
            const expected = [0];
            const expectedSize = 1;

            //When
            const actual = alist.slice(0);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return [0] if start index is 0, end is 2 from [0]', function () {
            //Given
            alist.init([0]);
            const expected = [0];
            const expectedSize = 1;

            //When
            const actual = alist.slice(0, 2);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return [27, 0] if start index is undefined from [27, 0]', function () {
            //Given
            alist.init([27, 0]);
            const expected = [27, 0];
            const expectedSize = 2;

            //When
            const actual = alist.slice();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return [27, 0] if start index is 0 from [27, 0]', function () {
            //Given
            alist.init([27, 0]);
            const expected = [27, 0];
            const expectedSize = 2;

            //When
            const actual = alist.slice(0);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return [27, 0] if start index is 0, end is 2 from [27, 0]', function () {
            //Given
            alist.init([27, 0]);
            const expected = [27, 0];
            const expectedSize = 2;

            //When
            const actual = alist.slice(0, 2);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return [27, 8, 0] if start index is undefined from [27, 8, 0]', function () {
            //Given
            alist.init([27, 8, 0]);
            const expected = [27, 8, 0];
            const expectedSize = 3;

            //When
            const actual = alist.slice();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return [27, 8, 0] if start index is 0 from [27, 8, 0]', function () {
            //Given
            alist.init([27, 8, 0]);
            const expected = [27, 8, 0];
            const expectedSize = 3;

            //When
            const actual = alist.slice(0);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return [27, 8] if start index is 0, end is 2 from [27, 8, 0]', function () {
            //Given
            alist.init([27, 8, 0]);
            const expected = [27, 8];
            const expectedSize = 3;

            //When
            const actual = alist.slice(0, 2);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return [8] if start index is 1, end is 2 from [27, 8, 0]', function () {
            //Given
            alist.init([27, 8, 0]);
            const expected = [8];
            const expectedSize = 3;

            //When
            const actual = alist.slice(1, 2);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('should return [8, 0] if start index is 1, end is 18 from [27, 8, 0]', function () {
            //Given
            alist.init([27, 8, 0]);
            const expected = [8, 0];
            const expectedSize = 3;

            //When
            const actual = alist.slice(1, 18);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });
    });

    describe('splice() tests', function() {
        let alist;

        beforeEach(() => {
            alist = new AList();
        });

        it('splice() should return [] from undefined', function () {
            //Given
            alist.init();
            const expected = [];
            const expectedSize = 0;

            //When
            const actual = alist.splice();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('splice() should return [] from null', function () {
            //Given
            alist.init(null);
            const expected = [];
            const expectedSize = 0;

            //When
            const actual = alist.splice();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('splice() should return [] from []]', function () {
            //Given
            alist.init([]);
            const expected = [];
            const expectedSize = 0;

            //When
            const actual = alist.splice();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('splice(0, 100) should return [] from []]', function () {
            //Given
            alist.init([]);
            const expected = [];
            const expectedSize = 0;

            //When
            const actual = alist.splice(0, 100);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('splice(0, 1) should return [27] from [27]]', function () {
            //Given
            alist.init([27]);
            const expected = [27];
            const expectedSize = 0;

            //When
            const actual = alist.splice(0, 1);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('splice(0, 1) should return [27] from [27, 8]]', function () {
            //Given
            alist.init([27, 8]);
            const expected = [27];
            const expectedSize = 1;

            //When
            const actual = alist.splice(0, 1);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('splice(0, 1) should return [27] from [27, 8, 0, 2, -8]]', function () {
            //Given
            alist.init([27, 8, 0, 2, -8]);
            const expected = [27];
            const expectedSize = 4;

            //When
            const actual = alist.splice(0, 1);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
        });

        it('splice(1, 2) should return [27, 8] from [8, 27, 0, 2, -8]]', function () {
            //Given
            alist.init([8, 27, 0, 2, -8]);
            const expected = [27, 0];
            const expectedSize = 3;
            const expectedArray = '[8, 2, -8]';

            //When
            const actual = alist.splice(1, 2);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
            assert.deepEqual(alist.toString(), expectedArray);
        });

        it('splice(1, 100) should return [27, 8] from [8, 27, 0, 2, -8]]', function () {
            //Given
            alist.init([8, 27, 0, 2, -8]);
            const expected = [27, 0, 2, -8];
            const expectedSize = 1;
            const expectedArray = '[8]';

            //When
            const actual = alist.splice(1, 100);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
            assert.deepEqual(alist.toString(), expectedArray);
        });

        it('splice(100, 8) should return [] from [8, 27, 0, 2, -8]]', function () {
            //Given
            alist.init([8, 27, 0, 2, -8]);
            const expected = [];
            const expectedSize = 5;
            const expectedArray = '[8, 27, 0, 2, -8]';

            //When
            const actual = alist.splice(100, 8);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
            assert.deepEqual(alist.toString(), expectedArray);
        });

        it('splice(2, 2, 100) should return [2, -8] from [8, 27, 0, 2, -8]]', function () {
            //Given
            alist.init([8, 27, 0, 2, -8]);
            const expected = [0, 2];
            const expectedSize = 4;
            const expectedArray = '[8, 27, 100, -8]';

            //When
            const actual = alist.splice(2, 2, 100);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(alist.getSize(), expectedSize);
            assert.deepEqual(alist.toString(), expectedArray);
        });
    });

    describe('sort() tests', function() {
        let alist;

        beforeEach(() => {
            alist = new AList();
        });

        it('should not do anything if undefined', function () {
            //Given
            alist.init();
            const expected = '[]';

            //When
            alist.sort(comparator);

            //Then
            assert.deepEqual(alist.toString(), expected);
        });

        it('should not do anything if null', function () {
            //Given
            alist.init(null);
            const expected = '[]';

            //When
            alist.sort(comparator);

            //Then
            assert.deepEqual(alist.toString(), expected);
        });

        it('should not do anything if []', function () {
            //Given
            alist.init([]);
            const expected = '[]';

            //When
            alist.sort(comparator);

            //Then
            assert.deepEqual(alist.toString(), expected);
        });

        it('should not do anything if no comparator', function () {
            //Given
            alist.init([]);
            const expected = '[]';

            //When
            alist.sort();

            //Then
            assert.deepEqual(alist.toString(), expected);
        });

        it('should not do anything if no comparator ([1, 15, 2])', function () {
            //Given
            alist.init([1, 15, 2]);
            const expected = '[1, 15, 2]';

            //When
            alist.sort();

            //Then
            assert.deepEqual(alist.toString(), expected);
        });

        it('should not do anything if [1]', function () {
            //Given
            alist.init([1]);
            const expected = '[1]';

            //When
            alist.sort(comparator);

            //Then
            assert.deepEqual(alist.toString(), expected);
        });

        it('should sort correctly if [2, 1]', function () {
            //Given
            alist.init([2, 1]);
            const expected = '[1, 2]';

            //When
            alist.sort(comparator);

            //Then
            assert.deepEqual(alist.toString(), expected);
        });

        it('should sort correctly if [1, 2]', function () {
            //Given
            alist.init([1, 2]);
            const expected = '[1, 2]';

            //When
            alist.sort(comparator);

            //Then
            assert.deepEqual(alist.toString(), expected);
        });

        it('should sort correctly if [8, 0, 1, 0, 2]', function () {
            //Given
            alist.init([8, 0, 1, 0, 2]);
            const expected = '[0, 0, 1, 2, 8]';

            //When
            alist.sort(comparator);

            //Then
            assert.deepEqual(alist.toString(), expected);
        });
    });

    describe('get() tests', function() {
        let alist;

        beforeEach(() => {
            alist = new AList();
        });

        it('get() should return undefined from undefined', function () {
            //Given
            alist.init();
            const expected = undefined;

            //When
            const actual = alist.get();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('get() should return undefined from null', function () {
            //Given
            alist.init(null);
            const expected = undefined;

            //When
            const actual = alist.get();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('get() should return undefined from []]', function () {
            //Given
            alist.init([]);
            const expected = undefined;

            //When
            const actual = alist.get();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('get() should return undefined from []]', function () {
            //Given
            alist.init([]);
            const expected = undefined;

            //When
            const actual = alist.get(8);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('get() should return 12 from [12]]', function () {
            //Given
            alist.init([12]);
            const expected = 12;

            //When
            const actual = alist.get(0);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('get() should return 0 from [12, 0]]', function () {
            //Given
            alist.init([12, 0]);
            const expected = 0;

            //When
            const actual = alist.get(1);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('get() should return 0 from [12, 0]]', function () {
            //Given
            alist.init([12, 0]);
            const expected = 0;

            //When
            const actual = alist.get(1);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('get() should return 0 from [12, 0, 8]]', function () {
            //Given
            alist.init([12, 0, 8]);
            const expected = 0;

            //When
            const actual = alist.get(1);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('get() should return undefined from [12, 0, 8]]', function () {
            //Given
            alist.init([12, 0, 8]);
            const expected = undefined;

            //When
            const actual = alist.get(50);

            //Then
            assert.deepEqual(actual, expected);
        });
    });

    describe('set() tests', function() {
        let alist;

        beforeEach(() => {
            alist = new AList();
        });

        it('set() should set nothing to undefined', function () {
            //Given
            alist.init();
            const expected = '[]';

            //When
            alist.set();

            //Then
            assert.deepEqual(alist.toString(), expected);
        });

        it('set() should set nothing to null', function () {
            //Given
            alist.init(null);
            const expected = '[]';

            //When
            alist.set();

            //Then
            assert.deepEqual(alist.toString(), expected);
        });

        it('set() should set nothing to undefined', function () {
            //Given
            alist.init();
            const expected = '[]';

            //When
            alist.set(0);

            //Then
            assert.deepEqual(alist.toString(), expected);
        });

        it('set() should set nothing to null', function () {
            //Given
            alist.init(null);
            const expected = '[]';

            //When
            alist.set(0);

            //Then
            assert.deepEqual(alist.toString(), expected);
        });

        it('set() should set nothing to undefined', function () {
            //Given
            alist.init();
            const expected = '[]';

            //When
            alist.set(10);

            //Then
            assert.deepEqual(alist.toString(), expected);
        });

        it('set() should set nothing to null', function () {
            //Given
            alist.init(null);
            const expected = '[]';

            //When
            alist.set(10);

            //Then
            assert.deepEqual(alist.toString(), expected);
        });

        it('set() should set nothing to null', function () {
            //Given
            alist.init(null);
            const expected = '[]';

            //When
            alist.set(10);

            //Then
            assert.deepEqual(alist.toString(), expected);
        });

        it('set() should set nothing to []]', function () {
            //Given
            alist.init([]);
            const expected = '[]';

            //When
            alist.set(10);

            //Then
            assert.deepEqual(alist.toString(), expected);
        });

        it('set() should set 8 to []]', function () {
            //Given
            alist.init([]);
            const expected = '[8]';

            //When
            alist.set(0, 8);

            //Then
            assert.deepEqual(alist.toString(), expected);
        });

        it('set() should set 8 to [1]]', function () {
            //Given
            alist.init([1]);
            const expected = '[1, 8]';

            //When
            alist.set(1, 8);

            //Then
            assert.deepEqual(alist.toString(), expected);
        });

        it('set() should set 8 to [1, 27]]', function () {
            //Given
            alist.init([1, 27]);
            const expected = '[1, 8]';

            //When
            alist.set(1, 8);

            //Then
            assert.deepEqual(alist.toString(), expected);
        });

        it('set() should set 8 to [1, 27, 0, -2, 9]]', function () {
            //Given
            alist.init([1, 27, 0, -2, 9]);
            const expected = '[1, 8, 0, -2, 9]';

            //When
            alist.set(1, 8);

            //Then
            assert.deepEqual(alist.toString(), expected);
        });

        it('set() should set 8 to [1, 27, 0, -2, 9]]', function () {
            //Given
            alist.init([1, 27, 0, -2, 9]);
            const expected = '[1, 27, 0, -2, 8]';

            //When
            alist.set(4, 8);

            //Then
            assert.deepEqual(alist.toString(), expected);
        });

        it('set() should set 8 to [1, 27, 0, -2, 9]]', function () {
            //Given
            alist.init([1, 27, 0, -2, 9]);
            const expected = '[1, 27, 0, -2, 8]';

            //When
            alist.set(4, 8);

            //Then
            assert.deepEqual(alist.toString(), expected);
        });
    });
});