'use strict';

class RangeValidator {
    constructor(from, to) {
        this._from = from;
        this._to = to;
    }

    set from(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Property \'from\' must be number type');
        }
        this._from = value;
    }

    get from() {
        return this._from;
    }

    set to(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Property \'to\' must be number type');
        }
        if (value < this.from) {
            throw new RangeError('\'Property \'to\' must be bigger than or equal to property \'from\'');
        }
        this._to = value;
    }

    get to() {
        return this._to;
    }

    get range() {
        return [this.from, this.to];
    }

    validate(number) {
        return (number >= this.from && number <= this.to);
    }

}

const range1 = new RangeValidator(-44.5, 24353431);
try {
    range1.to = -100;
} catch (e) {
    console.error(e);
}
console.log(range1.range);
console.log(range1.validate(444444000002));
console.log(range1.validate(0));
console.log(range1.validate(-5));

