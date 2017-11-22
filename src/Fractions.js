'use strict';

function Fraction(numerator, denominator) {
    return {
        add: function (other) {
            var num = numerator * other.denominator()
                + other.numerator() * denominator;

            var dem = denominator * other.denominator();
            var gcd = Integers.gcd(num, dem);

            return Fraction(num / gcd, dem / gcd);
        },

        subtract: function (other) {
            return Fraction(numerator, denominator)
                .add(Fraction(-other.numerator(), other.denominator()))
        },

        numerator: function () {
            return numerator;
        },

        denominator: function () {
            return denominator;
        }
    };
}
