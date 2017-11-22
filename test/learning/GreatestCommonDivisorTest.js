'use strict';

describe('Greatest Common Divisor behaviour', function () {
    it('examples', function () {
        expect(Integers.gcd(20 ,5)).toBe(5);
        expect(Integers.gcd(13 ,26)).toBe(13);
        expect(Integers.gcd(-20 ,4)).toBe(4);
        expect(Integers.gcd(-20 ,-10)).toBe(10);
        expect(Integers.gcd(-20 ,0)).toBe(20);
        expect(Integers.gcd(0 ,0)).toBe(0);
    })

});
