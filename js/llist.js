const Node = function (value) {
    this.value = value;
    this.next = null;
};

const LList = function () {
    this._root = null;
    this._size = 0;
};

LList.prototype = Object.create(ProtoList.prototype);
LList.prototype.constructor = LList;

LList.prototype.getSize = function () {
    return this._size;
};

LList.prototype.init = function (arr) {
    if (arr.length === 0 || !arr) {
        return this.getSize();
    } else {
        const node = new Node(arr[0]);
        this._size++;

        if (this._root === null) {
            this._root = node;
        }

        let tempNode = this._root;

        while (tempNode.next) {
            tempNode = tempNode.next;
        }

        tempNode.next = node;

        for (let i = 1; i < arr.length; i++) {
            tempNode = tempNode.next;
            tempNode.next = new Node(arr[i]);
            this._size++;
        }

        return this.getSize();
    }
};

LList.prototype.toString = function () {
    let tempNode = this._root;
    let llist = '';

    while (tempNode !== null ) {
        llist  += `${tempNode.value}, `;
        tempNode = tempNode.next;
    }

    if (llist.length !== 0) {
        llist = llist.slice(0, -2);
    }

    return llist;
};

LList.prototype.toArray = function () {
    let tempNode = this._root;
    let llist = [];
    let i = 0;

    while (tempNode !== null ) {
        llist[i]  = tempNode.value;
        tempNode = tempNode.next;
        i++;
    }

    return llist;
};

LList.prototype.push = function (value) {
    if (value !== undefined) {
        const node = new Node(value);
        this._size++;

        if (this._root === null) {
            this._root = node;
        } else {
            let tempNode = this._root;

            while (tempNode.next) {
                tempNode = tempNode.next;
            }

            tempNode.next = node;
        }

        return this.getSize();
    } else {
        return this.getSize();
    }
};

LList.prototype.pop = function () {
    if (!this._root) {
        return undefined;
    }

    let tempNode = this._root;
    let value = undefined;

    if (tempNode !== null) {
        if (tempNode.next !== null) {
            var nextNode = tempNode.next;

            while (nextNode.next !== null) {
                tempNode = tempNode.next;
                nextNode = tempNode.next;
            }

            tempNode.next = null;
            value = nextNode.value;
        } else {
            value = this._root.value;
            this._root = null;
        }
    }

    this._size--;

    return value;
};

LList.prototype.unshift = function (value) {
    const node = new Node(value);

    if (this._root === null) {
        this._root = node;
    } else {
        node.next = this._root;
        this._root = node;
    }

    this._size++;

    return this.getSize();
};

LList.prototype.shift = function () {
    if (!this._root) {
        return undefined;
    }

    const node = this._root;
    this._root = this._root.next;
    this._size--;

    return node.value;
};

LList.prototype.sort = function () {
    if (!this._root) {

        return;
    }

    let e = null;
    let temp = new Node();

    while(e !== this._root.next) {
        let tempNode = this._root;
        let nextNode = this._root.next;
        let nextNextNode = this._root;

        while (tempNode !== e) {
            if(tempNode.value > nextNode.value) {
                temp = nextNode.next;
                nextNode.next = tempNode;
                tempNode.next = temp;

                if(tempNode === this._root) {
                    this._root = nextNode;
                    nextNextNode = nextNode;
                } else {
                    nextNextNode.next = nextNode;
                    nextNextNode = nextNode;
                }
            } else {
                nextNextNode = tempNode;
                tempNode = tempNode.next;
            }

            nextNode = tempNode.next;

            if (nextNode === e) {
                e = tempNode;
            }
        }
    }
};

LList.prototype.set = function (index, element) {
    if (!this._root || index < 0 || this.getSize() < index) {

        return;
    } else if (index === 1) {
        this._root.value = element;
    } else {
        let node = this._root;
        let i = 1;

        while(i < index) {
            if(node.next !== null) {
                node = node.next;
                i++;
            }
        }

        node.value = element;
    }
};

LList.prototype.get = function (index) {
    if (this.getSize() < index || index <= 0) {

        return undefined;
    } else {
        let node = this._root;
        let i = 1;

        while(i < index) {
            if(node.next !== null) {
                node = node.next;
                i++;
            }
        }

        return node.value;
    }
};

LList.prototype.slice = function (begin, end) {
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

LList.prototype.splice = function (begin, count, element) {
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

            for (let i = 0; i < argument.length; i++) {
                const temp = new Node(argument[i]);
                newNode.next = temp;
                newNode = newNode.next;
            }

            newNode.next = tempNode;
            this._size = this._size - count + argument.length;
        }

        return arrList;
    }
};