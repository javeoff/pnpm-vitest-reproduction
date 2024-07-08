import { describe, test, expect } from 'vitest'
import { x } from 'reproduction-package-b';

describe('package-a', () => {
	test('test', () => {
		expect(x).toBe(1)
	})
})
