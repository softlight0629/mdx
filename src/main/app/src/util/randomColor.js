const colors = ['#3988E4', '#B97940', '#2F9547', '#235B9D', '#59AF9A'];

export default function randomColor(text) {
  if (!text) {
    return colors[0];
  }
  const chartCode = text.charCodeAt(0);
  const index = chartCode % colors.length;
  return colors[index] || colors[0];
}