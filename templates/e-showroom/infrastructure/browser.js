// Thin adapters over browser APIs. Each subscription returns its own disposer.
export function createHashHistory(onChange) {
  const listener = () => onChange(location.hash);
  window.addEventListener('popstate', listener);
  return {
    current: () => location.hash,
    push: hash => { try { history.pushState(null, '', hash); } catch (error) { location.hash = hash; } },
    dispose: () => window.removeEventListener('popstate', listener)
  };
}

export function observeWidth(element, onChange) {
  if (!element || !window.ResizeObserver) return () => {};
  const observer = new ResizeObserver(([entry]) => {
    const width = Math.round(entry.contentRect.width);
    if (width) onChange(width);
  });
  observer.observe(element);
  return () => observer.disconnect();
}

export function onEscape(callback) {
  const listener = event => { if (event.key === 'Escape') callback(); };
  window.addEventListener('keydown', listener);
  return () => window.removeEventListener('keydown', listener);
}

export const openExternal = url => window.open(url, '_blank', 'noopener');
