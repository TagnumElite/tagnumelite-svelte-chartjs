export function randomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

export const LANGUAGE_COLORS: { [language: string]: string } = {
  svelte: 'rgb(1168, 8, 8)',
  typescript: 'rgb(0, 255, 0)'
};
