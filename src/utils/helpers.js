export * from './useExtraClasses';
export * from './fontawesome';

/**
 * UUID helper fn
 * @param {string} prefix - optional prefix
 */
export function uid(prefix) {
	let r;
	// So snapshot comparisons pass in tests,
	if (typeof process === 'object' && process.env.ENV === 'tests') {
		r = 1;
	} else {
		r = Math.random().toString(36).substring(2, 16);
	}
	return `${prefix && `${prefix}-`}${r}`;
}
