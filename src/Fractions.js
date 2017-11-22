'use strict';

function Fraction(numerator, denominator) {
    return {
        add: function (other) {
            var returnNumerator;
            var returnDenominator;

            if (denominator === other.denominator()) {
                returnNumerator = numerator + other.numerator();
                returnDenominator = denominator;
            } else {
                returnNumerator = numerator * other.denominator()
                    + other.numerator() * denominator;
                returnDenominator = denominator * other.denominator();
            }

            return Fraction(
                returnNumerator,
                returnDenominator
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
