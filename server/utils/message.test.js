var expect = require('expect');
var {generateMessage} = require('./message')

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