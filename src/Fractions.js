'use strict';

function Fraction(numerator, denominator) {
    return {
        add: function (other) {
            return Fraction(
                numerator * other.denominator()
                + other.numerator() * denominator ,
                denominator * other.denominator()
            );
        },

        numerator: function () {
            return numerator;
        },

        denominator: function () {
            return denominator;
        }
    };
}
