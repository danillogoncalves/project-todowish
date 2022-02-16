import getProjects from '../mocks/getProjects';

describe('1 - Teste a função addLabel', () => {
  it('1 - Testar se addLabel é um função', () => {
    expect(typeof getProjects).toBe('function');
  });
});