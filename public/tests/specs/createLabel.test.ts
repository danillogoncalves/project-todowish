import createLabel from '../mocks/createLabel';

describe('2 - Teste a função addLabel', () => {
  it('1 - Testar se addLabel é um função', () => {
    expect(typeof createLabel).toBe('function');
  });
});