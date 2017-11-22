'use strict';

function Fraction(numerator, denominator) {
    return {
        add: function (other) {
            if (denominator === other.denominator()) {
                return Fraction(numerator + other.numerator(),
                    denominator);
            }
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
