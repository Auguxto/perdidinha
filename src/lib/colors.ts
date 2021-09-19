export function rgbToHex(rgb: number) {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = '0' + hex;
  }

  return hex;
}

export function randomColor(): string {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return fullHex(r, g, b);
}

export function fullHex(r: number, g: number, b: number) {
  let rC = rgbToHex(r);
  let gC = rgbToHex(g);
  let bC = rgbToHex(b);

  return `#${rC + gC + bC}`;
}
