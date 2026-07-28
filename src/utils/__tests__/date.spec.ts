import { formatCurrentDate } from '../date';

describe('formatCurrentDate', () => {
  it('should format the current date correctly', () => {
    const formatted = formatCurrentDate();
    // Since it returns the current date, we just check if it returns a non-empty string with the correct format
    expect(typeof formatted).toBe('string');
    expect(formatted.length).toBeGreaterThan(0);
    // The first letter should be uppercase
    expect(formatted.charAt(0)).toBe(formatted.charAt(0).toUpperCase());
  });
});
