import updateTask from '../mocks/updateTask';

describe('1 - Teste a função addLabel', () => {
  it('1 - Testar se addLabel é um função', () => {
    expect(typeof updateTask).toBe('function');
  });
});
