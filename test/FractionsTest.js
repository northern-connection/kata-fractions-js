'use strict';

describe('Adding fractions', function() {
    it('when second operand is zero the result is the first operand', function() {
        var fractionA = Fraction(1, 1);
        var fractionB = Fraction(0, 1);

        var result = fractionA.add(fractionB);

        expect(result.numerator()).toBe(1);
        expect(result.denominator()).toBe(1);
    });

    it('when both operands have same denominator then numerators are added', function() {
        var fractionA = Fraction(1, 2);
        var fractionB = Fraction(2, 2);

        var result = fractionA.add(fractionB);

        expect(result.numerator()).toBe(3);
        expect(result.denominator()).toBe(2);
    });
});
