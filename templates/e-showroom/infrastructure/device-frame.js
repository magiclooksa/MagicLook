// Preview-only: frames the site as a fixed device inside the editor canvas.
const DEVICE_PRESETS = {
  desktop: { width: 1280, height: 820, radius: 20 },
  tablet: { width: 834, height: 1112, radius: 20 },
  mobile: { width: 390, height: 844, radius: 36 }
};
const FRAME_SHADOW = '0 30px 80px -30px rgba(23,25,27,.45), 0 0 0 1px rgba(23,25,27,.08)';

export function applyDeviceFrame(outer, frame, device) {
  if (!outer || !frame) return;
  const preset = DEVICE_PRESETS[device];
  outer.style.padding = preset ? '24px' : '0';
  frame.style.maxWidth = preset ? preset.width + 'px' : 'none';
  frame.style.maxHeight = preset ? preset.height + 'px' : 'none';
  frame.style.borderRadius = preset ? preset.radius + 'px' : '0';
  frame.style.boxShadow = preset ? FRAME_SHADOW : 'none';
}
