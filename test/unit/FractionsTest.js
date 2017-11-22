'use strict';

describe('Fractions', function () {
    describe('addition', function () {
        it('when second operand is zero the result is the first operand', function () {
            var fractionA = Fraction(1, 1);
            var fractionB = Fraction(0, 1);

            var result = fractionA.add(fractionB);

            expect(result.numerator()).toBe(1);
            expect(result.denominator()).toBe(1);
        });

        it('when both operands have same denominator then numerators are added', function () {
            var fractionA = Fraction(1, 2);
            var fractionB = Fraction(2, 2);
            var result = fractionA.add(fractionB);

            expect(result.numerator()).toBe(3);
            expect(result.denominator()).toBe(2);
        });

        it('when denominators are different', function () {
            var fractionA = Fraction(1, 2);
            var fractionB = Fraction(1, 3);

            var result = fractionA.add(fractionB);

            expect(result.numerator()).toBe(5);
            expect(result.denominator()).toBe(6);
        });

        it('simplifies result after operation', function () {
            var fractionA = Fraction(1, 2);
            var fractionB = Fraction(1, 2);

            var result = fractionA.add(fractionB);

            expect(result.numerator()).toBe(1);
            expect(result.denominator()).toBe(1);
        });

    });

    describe('subtraction', function () {
        it('is a special case of addition', function () {
            var subtraction = Fraction(1, 2).subtract(Fraction(1, 2));
            var addition = Fraction(1, 2).add(Fraction(-1, 2));

            expect(subtraction.numerator()).toBe(addition.numerator());
            expect(subtraction.denominator()).toBe(addition.denominator());
        });
    });
});
