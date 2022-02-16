import getOneTask from '../mocks/getOneTask';

describe('1 - Teste a função addLabel', () => {
  it('1 - Testar se addLabel é um função', () => {
    expect(typeof getOneTask).toBe('function');
  });
});