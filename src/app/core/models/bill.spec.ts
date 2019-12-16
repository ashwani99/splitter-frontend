import { Bill } from './bill';

describe('Bill', () => {
  it('should create an instance', () => {
    expect(new Bill('demo', 'random')).toBeTruthy();
  });
});
