// Storage port implementation backed by localStorage. Failures (private mode, quota) degrade to no persistence.
export function createLocalStorage(key) {
  return {
    read() {
      try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch (error) { return null; }
    },
    write(value) {
      try { localStorage.setItem(key, JSON.stringify(value)); } catch (error) { /* persistence is optional */ }
    }
  };
}
