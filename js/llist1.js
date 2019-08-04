const Elem = function (value) {
    this.value = value;
    this.prev = null;
    this.next = null;
};

const LList1 = function () {
    this._root = null;
    this._tail = null;
    this._size = 0;
};

LList1.prototype = Object.create(ProtoList.prototype)
LList1.prototype.constructor = LList1;

LList1.prototype.init = function (arr) {
    if (!arr || arr.length === 0) {

        return this.getSize();
    } else {
        var tempNode;
        const node = new Elem(arr[0]);
        this._size++;

        if (this._root === null) {
            this._root = node;
            tempNode = this._root;
            let newNode = tempNode;

            for (let i = 1; i < arr.length; i++) {
                tempNode.next = new Elem(arr[i]);
                tempNode = tempNode.next;
                tempNode.prev = newNode;
                newNode = tempNode;
                this._size++;
            }
        } else {
            tempNode = this._root;

            while (tempNode.next) {
                tempNode = tempNode.next;
            }

            tempNode.next = node;
            let newNode = tempNode;

            for (let i = 1; i < arr.length; i++) {
                tempNode = tempNode.next;
                tempNode.prev = newNode;
                tempNode.next = new Elem(arr[i]);
                newNode = tempNode;
                this._size++;
            }

            tempNode = tempNode.next;
            tempNode.prev = newNode;
        }

        return this.getSize();
    }
};

LList1.prototype.toString = function () {
    let llist1 = '';

    if (this._size !== 0) {
        let tempNode = this._root;

        while (tempNode !== null) {
            llist1 += `${tempNode.value}, `;
            tempNode = tempNode.next;
        }

        if (llist1.length !== 0) {
            llist1 = llist1.slice(0, -2);
        }
    }

    return llist1;
};

LList1.prototype.toArray = function () {
    let llist1 = [];
    let i = 0;

    if (this._size !== 0) {
        let tempNode = this._root;

        while (tempNode !== null) {
            llist1[i] = tempNode.value;
            tempNode = tempNode.next;
            i++;
        }
    }

    return llist1;
};

LList1.prototype.getSize = function () {
    return this._size;
};

LList1.prototype.push = function (value) {
    if (value !== undefined) {
        const node = new Elem(value);
        node.prev = this._tail;

        if (this._tail !== null) {
            this._tail.next = node;
        }

        if (this._size === 0) {
            this._root = this._tail = node;
        } else {
            this._tail = node;
        }

        this._size++;

        return this.getSize();
    } else {
        return this.getSize();
    }
};

LList1.prototype.pop = function () {
    if (!this._root) {

        return undefined;
    }

    let value;

    if (this._size > 1) {
        value = this._tail.value;
        this._tail = this._tail.prev;
        this._tail.next = null;
        this._size--;
    } else {
        value = this._tail.value;
        this._tail = this._root = null;
        this._size = 0;
    }

    return value;
};

LList1.prototype.unshift = function (value) {
    if (value !== undefined) {
        const node = new Elem(value);
        node.next = this._root;

        if (this._root !== null) {
            this._root.prev = node;
        }

        if (this._size === 0) {
            this._root = this._tail = node;
        } else {
            this._root = node;
        }

        this._size++;

        return this.getSize();
    } else {

        return this.getSize();
    }
};

LList1.prototype.shift = function () {
    if (!this._root) {

        return undefined;
    }

    let value;

    if (this._size > 1) {
        value = this._root.value;
        this._root = this._root.next;
        this._root.prev = null;
        this._size--;
    } else {
        value = this._tail.value;
        this._tail = this._root = null;
        this._size = 0;
    }

    return value;
};

LList1.prototype.sort = function () {
    if (!this._root) {
        return;
    }

    let e = null;

    while (e === null) {
        let tempNode = this._root;
        let nextNode = tempNode.next;
        e = 1;

        while (nextNode) {
            if (tempNode.value > nextNode.value) {
                let temp = tempNode.value;
                tempNode.value = nextNode.value;
                nextNode.value = temp;
                e = null;
            }

            tempNode = tempNode.next;
            nextNode = nextNode.next;
        }
    }
};

LList1.prototype.set = function (index, value) {
    if (!this._root || index < 0 || this.getSize() < index) {

        return;
    } else {
        if (index === 1) {
            this._root.value = value;
        } else if (index === this.getSize()) {
            this._tail.value = value;
        } else {
            let tempNode = this._root;
            let i = 1;

            while (i < index) {
                tempNode = tempNode.next;
                i++;
            }

            tempNode.value = value;
        }
    }
};

LList1.prototype.get = function (index) {
    if (this.getSize() < index || index <= 0 || index === undefined) {

        return undefined;
    }

    let tempNode = this._root;
    let i = 1;

    while(i < index && tempNode !== null) {
        tempNode = tempNode.next;
        i++;
    }

    return (tempNode === null) ? undefined : tempNode.value;
};

LList1.prototype.slice = function (begin, end) {
    let tempNode = this._root;
    let arrList = [];

    if (begin <= 0 || end < 0 || end < begin) {

        return undefined;
    } else if (this.getSize() >= begin) {
        let j = 1;
        let k = 0;

        while (j < begin) {
            tempNode = tempNode.next;
            j++;
        }

        let finish = (end === undefined) ? this.getSize() + 1 : end;

        for (let i = j; i < finish; i++) {
            if (tempNode !== null) {
                arrList[k] = tempNode.value;
                tempNode = tempNode.next;
                k++;
            }
        }

        return  arrList;
    }
};

LList1.prototype.splice = function (begin, count, element) {
    let tempNode = this._root;
    let arrList = [];
    let argument = [];

    if (tempNode !== null) {
        var nextNode = tempNode.next;
    }

    for (let i = 2, k = 0; i < arguments.length; i++, k++) {
        argument[k] = arguments[i];
    }

    if (begin <= 0 || count < 0 || count === undefined) {

        return undefined;
    } else if (this.getSize() >= begin) {
        let j = 1;

        while (j < begin) {
            tempNode = tempNode.next;
            nextNode = tempNode.next;
            j++;
        }

        for (let i = 0; i < count; i++) {
            if (tempNode !== null) {
                arrList[i] = tempNode.value;
                tempNode = tempNode.next;
            }
        }

        if (begin === 1) {
            this._root = tempNode;
            for (let i = argument.length - 1; i >= 0; i--) {
                this.unshift(argument[i]);
            }

            this._size = this._size - count;
        } else {
            let newNode = this._root;
            j = 2;

            while (j < begin) {
                newNode = newNode.next;
                j++;
            }

            let prevNode = newNode;

            for (let i = 0; i < argument.length; i++) {
                const node = new Elem(argument[i]);
                newNode.next = node;
                newNode = newNode.next;
                newNode.prev = prevNode;
                prevNode = newNode;
            }

            newNode.next = tempNode;

            if (tempNode) {
                tempNode.prev = newNode;
            }

            this._size = this._size - count + argument.length;
        }

        return arrList;
    }
};