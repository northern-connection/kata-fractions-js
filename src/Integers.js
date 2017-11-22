'use strict';

var Integers = {
    gcd: function gcd_rec(a, b) {
        return b ? gcd_rec(b, a % b) : Math.abs(a);
    }
};


