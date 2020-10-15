import add from './add';

describe('adding', () => {
	it('adds', () => {
		expect.assertions(1);
		expect(add(1, 2)).toBe(3);
	});
});
