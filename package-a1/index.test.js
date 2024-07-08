import { describe, test, expect } from 'vitest'
import { x } from 'reproduction-package-b';
import sendTransaction from '@cryptoscan/solana-send-transaction';

describe('package-a', () => {
	test('test', () => {
		sendTransaction()
		expect(x).toBe(1)
	})
})
