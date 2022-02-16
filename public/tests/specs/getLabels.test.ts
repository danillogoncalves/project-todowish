import getLabels from '../mocks/getLabels';

describe('1 - Teste a função addLabel', () => {
  it('1 - Testar se addLabel é um função', () => {
    expect(typeof getLabels).toBe('function');
  });
});