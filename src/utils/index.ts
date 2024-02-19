export function hexToRgb(hex: string): Array<number> {
  // Remove '#' if present
  hex = hex.replace(/^#/, "");
  // Parse hexadecimal values to RGB
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  // Return RGB value as string
  return [r, g, b];
}
export function rgbToHex(rgb: number[]) {
  const r = rgb[0];
  const g = rgb[1];
  const b = rgb[2];
  // Convert each component to hexadecimal and concatenate them
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
export function downloadBase64Image(base64String:string, filename:string) {
  // Create an anchor element
  const link = document.createElement('a');
  // Set the href attribute to the base64 string
  link.href = base64String;
  // Set the download attribute to specify the filename
  link.download = filename;
  // Append the anchor element to the body
  document.body.appendChild(link);
  // Trigger a click event on the anchor element
  link.click();
  // Remove the anchor element from the body
  document.body.removeChild(link);
}