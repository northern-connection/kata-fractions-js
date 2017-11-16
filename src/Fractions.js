'use strict';

function Fraction(numerator, denominator) {
    return {
        add: function (other) {
            return Fraction(numerator, denominator);
        },

        numerator: function () {
            return numerator;
        },

        denominator: function () {
            return denominator;
        }
    };
}
