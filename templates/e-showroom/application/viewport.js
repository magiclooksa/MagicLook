export const BREAKPOINT = Object.freeze({ tablet: 640, desktop: 1024 });

export function classifyViewport(width) {
  const isMobile = width < BREAKPOINT.tablet;
  const isDesktop = width >= BREAKPOINT.desktop;
  return { isMobile, notMobile: !isMobile, isDesktop, notDesktop: !isDesktop };
}
