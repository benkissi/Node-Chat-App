var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var message = {
            from: 'Ben',
            text: 'this is test'
        }

        var res = generateMessage(message.from, message.text);
        expect(res.from).toBe(message.from);
        expect(res.text).toBe(message.text);
        expect(res.createdAt).toBeA('number');
    });
});  

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var locReq = {
            from: 'Admin',
            lat: 1,
            long: 2,
        }

        var res = generateLocationMessage(locReq.from, locReq.lat, locReq.long);
        expect(res.from).toBe('Admin');
        expect(res.url).toBe(`https://google.com/maps/?q=${locReq.lat},${locReq.long}`);
        expect(res.createdAt).toBeA('number');
    })
})