const expect = require('expect');

const {Users} = require('./users');

var users;

beforeEach(() => {
    users = new Users();
    users.users = [{
        id: 1,
        name: 'Derek',
        room: 'Billionaires club'
    },
    {
        id: 2,
        name: 'Sam',
        room: 'Billionaires club'
    },
    {
        id: 3,
        name: 'Nana',
        room: 'Node Ninja'
    }];
});

describe('Users', () => {
    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Ben',
            room: 'Billionaires club'
        }

        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove user', () => {
        var resUser = users.removeUser(2);
        expect(resUser.id).toBe(2);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var resUser = users.removeUser(10);
        expect(resUser).toNotExist();
        expect(users.users.length).toBe(3);
    })

    it('should find user', () => {
        var resUser = users.getUser(2);
        expect(resUser).toEqual({
            id: 2,
            name: 'Sam',
            room: 'Billionaires club'
        })
    });

    it('should not find user', () => {
        var resUser = users.getUser(10);
        expect(resUser).toNotExist();
    })


    it('should return names for Billionaires club', () => {
        var userList = users.getUserList('Billionaires club');

        expect(userList).toEqual(['Derek', 'Sam']);
    });

    it('should return names for Node Ninja', () => {
        var userList = users.getUserList('Node Ninja');

        expect(userList).toEqual(['Nana']);
    })
});