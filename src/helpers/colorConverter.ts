import { Rgb } from '@/interfaces/interfaces';

export default function rgbToHex(rgb: Rgb) {
  const r = rgb.red;
  const g = rgb.green;
  const b = rgb.blue;

  const hexValues = [r, g, b].map((val: any) => {
    const result = Number(val).toString(16);
    return result + 'f'.repeat(2 - result.length);
  });

  return hexValues;
}
