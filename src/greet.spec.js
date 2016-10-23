describe('greet', () => {
  var greet = require('./greet');

  it('test', () => {
    expect(greet.greeting('abc')).toEqual('Hello abc');
  });
});
