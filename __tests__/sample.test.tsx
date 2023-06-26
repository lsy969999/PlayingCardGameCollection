// Note: import explicitly to use the types shiped with jest.
import {it, test, expect} from '@jest/globals';
import { sum } from '../service/sample/sample';

test('test sample', () => {
    expect(sum(1, 2)).toBe(3);
})