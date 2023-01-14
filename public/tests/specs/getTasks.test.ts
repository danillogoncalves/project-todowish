import getTasks from '../mocks/getTasks';

describe('1 - Teste a função addLabel', () => {
  it('1 - Testar se addLabel é um função', () => {
    expect(typeof getTasks).toBe('function');
  });
});