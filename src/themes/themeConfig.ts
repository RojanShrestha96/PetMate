export type ThemeName = 'minimal' | 'friendly' | 'bold' | 'glass';
export interface Theme {
  name: ThemeName;
  label: string;
  description: string;
}
export const themes: Theme[] = [{
  name: 'minimal',
  label: 'Minimal Clean',
  description: 'Scandinavian simplicity with calm sophistication'
}, {
  name: 'friendly',
  label: 'Soft & Friendly',
  description: 'Warm pastels with cozy, welcoming vibes'
}, {
  name: 'bold',
  label: 'Bold Modern',
  description: 'High contrast energy with vibrant colors'
}, {
  name: 'glass',
  label: 'Glassmorphism',
  description: 'Frosted glass layers with ethereal depth'
}];
export const getThemeClass = (theme: ThemeName): string => {
  return `theme-${theme}`;
};