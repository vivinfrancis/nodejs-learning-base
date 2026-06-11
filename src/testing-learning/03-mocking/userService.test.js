const service = require('./userService');

test('get user test',async()=>{
    const user = await service.getUser();
    expect(user.length).toBe(1);
})