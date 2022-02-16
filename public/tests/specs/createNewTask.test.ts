import createNewTask from '../mocks/createNewTask';

describe('1 - Teste a função addLabel', () => {
  it('1 - Testar se addLabel é um função', () => {
    expect(typeof createNewTask).toBe('function');
  });
});