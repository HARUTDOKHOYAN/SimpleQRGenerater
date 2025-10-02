import { describe, it, expect, vi } from 'vitest';

describe('entrypoint side effects', () => {
  it('logs the greeting at least once on import', async () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});
    await import('../src/index');
    expect(spy).toHaveBeenCalledWith('Happy developing ✨');
    spy.mockRestore();
  });
});


