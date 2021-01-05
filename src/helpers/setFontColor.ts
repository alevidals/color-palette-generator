export default function setFontColor(color: string[]) {
  const brightness = Math.round(((parseInt(color[0], 0) * 299)
    + (parseInt(color[1], 0) * 587)
    + (parseInt(color[2], 0) * 114)) / 1000);
  const textColour = (brightness > 125) ? 'text-dark' : 'text-white';
  return textColour;
}
