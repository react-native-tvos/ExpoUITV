import { useWindowDimensions } from 'react-native';

export type Spacing = {
  half: number;
  one: number;
  two: number;
  three: number;
  four: number;
  five: number;
  six: number;
};

export const Spacing: Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
};

export type ScreenDimensionsResult = {
  width: number;
  height: number;
  scale: number;
  landscape: boolean;
  spacing: Spacing;
};

export function useScreenDimensions(): ScreenDimensionsResult {
  const { width, height } = useWindowDimensions();
  const scale = width > height ? width / 1000 : height / 1000;
  return {
    width,
    height,
    scale,
    landscape: width > height,
    spacing: {
      half: Spacing.half * scale,
      one: Spacing.one * scale,
      two: Spacing.two * scale,
      three: Spacing.three * scale,
      four: Spacing.four * scale,
      five: Spacing.five * scale,
      six: Spacing.six * scale,
    },
  };
}
