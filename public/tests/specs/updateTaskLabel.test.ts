import updateTaskLabel from '../mocks/updateTaskLabel';

describe('1 - Teste a função addLabel', () => {
  it('1 - Testar se addLabel é um função', () => {
    expect(typeof updateTaskLabel).toBe('function');
  });
});
