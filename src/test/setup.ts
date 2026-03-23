import '@testing-library/jest-dom/vitest'; // Specific vitest matchers
import { cleanup } from '@testing-library/react';
import { afterEach, expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extends Vitest's 'expect' with React Testing Library matchers
expect.extend(matchers);

afterEach(() => {
	cleanup();
});
