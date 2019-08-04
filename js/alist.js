const AList = function () {
    this._array = [];
};

AList.prototype = Object.create(ProtoList.prototype);
AList.prototype.constructor = AList;

AList.prototype.init = function (arr) {
    if (arr === undefined || arr === null) {
        this._array.length = 0;
    } else {
        for (let i = 0; i < arr.length; i++) {
            this._array[i] = arr[i];
        }
    }

    return this._array;
};

AList.prototype.toArray = function () {
    return this._array;
};

AList.prototype.getSize = function () {
    return (this._array.length === 0) ? 0 : this._array.length;
};

AList.prototype.toString = function () {
    let response = '[';

    for (let i = 0; i < this._array.length; i++) {
        response += `${this._array[i]}, `;
    }

    if (this._array.length !== 0) {
        response = response.slice(0, -2);
    }

    response +=']';

    return response;
};

AList.prototype.push = function (element) {
    if (element === undefined || element === null) {

        return 0;
    } else {
        this._array[this._array.length] = element;

        return this.getSize();
    }
};

AList.prototype.pop = function () {
    if (this._array.length === 0) {

        return undefined;
    } else {
        let element = this._array[this._array.length - 1];
        this._array.length = this._array.length-1;

        return element;
    }
};

AList.prototype.unshift = function (element) {
    if (element === undefined || element === null) {
        return this.getSize();
    } else {
        if (this._array.length === 0) {
            this._array[this._array.length] = element;

            return this.getSize();
        } else {
            for (let i = this._array.length - 1; i >= 0; i--) {
                this._array[i + 1] = this._array[i];
            }

            this._array[0] = element;

            return this.getSize();
        }
    }
};

AList.prototype.shift = function () {
    if (this._array.length === 0) {

        return undefined;
    } else {
        let element = this._array[0];

        for (let i = 0; i < this._array.length-1; i++) {
            this._array[i] = this._array[i+1];
        }

        this._array.length = this._array.length-1;

        return element;
    }
};

AList.prototype.sort = function (comporator) {
    if (!this._array.length) {
        return -1;
    }

    let sortArray = this._array;
    let i = (sortArray.length / 2).toFixed();

    while (i > 0) {
        for (let j = 0; j < sortArray.length; j++) {
            let k = j, t = sortArray[j];

            while (k >= i && sortArray[k-i] > t) {
                sortArray[k] = sortArray[k-i];
                k -= i;
            }

            sortArray[k] = t;
        }

        i = (i == 2) ? 1 : ~~(i * 5 / 11);
    }

    return sortArray;
};

AList.prototype.comporator = function (first, second) {
    return first - second;
};

AList.prototype.set = function (index, element) {
    if (index === undefined || index === null || element === undefined || element === null) {

        return [];
    } else {
        this._array[index] = element;

        return this._array;
    }
};

AList.prototype.get = function (index) {
    return this._array[index];
};

AList.prototype.slice = function (begin, end) {
    let newArray = [];
    let j = 0;

    if (begin === undefined) {
        return this.toArray();
    } else if (this._array.length > begin && end === undefined) {
        for (let i = begin; i < this._array.length; i++){
            newArray[j] = this._array[i];
            ++ j;
        }

        return newArray;
    } else if (this._array.length > begin && end !== undefined){
        let finish = (this.getSize() > end) ? end : this.getSize();
        for (let i = begin; i < finish; i++) {
            newArray[j] = this._array[i];
            ++ j;
        }

        return newArray;
    } else {
        return newArray;
    }
};

AList.prototype.splice = function (begin, count, element) {
    let newArray = [];
    let argument = [];

    for (let i = 2, k = 0; i < arguments.length; i++, k++) {
        argument[k] = arguments[i];
    }

    count = (this.getSize() - begin > count) ? count : this.getSize() - begin;

    if (this._array.length > begin) {
        for (let i = begin, j = 0; i < begin + count; i++, j++) {
            newArray[j] = this._array[i];
        }

        if (argument.length > count || count === 0) {
            for (let i = this._array.length - 1; i >= begin + count; i--) {
                this._array[i + (argument.length - count)] = this._array[i];
            }
        } else if (argument.length < count) {
            for (let i = begin + count; i < this._array.length; i++) {
                this._array[i - count + argument.length] = this._array[i];
            }

            this._array.length =  this._array.length - count + argument.length;
        }

        for (let i = begin, l = 0; i < begin + argument.length; i++, l++) {
            this._array[i] = argument[l];
        }

        return newArray;
    } else {

        return newArray;
    }
};