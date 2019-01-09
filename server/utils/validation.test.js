const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', ()=> {
        var res = isRealString(1);
        expect(res).toNotExist();
    });

    it('should reject strings with only spaces', () => {
        var res = isRealString('      ');
        expect(res).toNotExist();
    });

    it('should allow strings with non-space characters', () => {
        var res = isRealString('hey there');
        expect(res).toExist();
    });
})