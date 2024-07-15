export const ButtonTypes = ['primary', 'secondary'] as const;

export type ButtonVariant = (typeof ButtonTypes)[number];
