export function secToMin(sec: number): string {
  return (sec / 60).toFixed(1);
}

export function formatSec(sec: number) {
  const _min = Math.floor(sec / 60);
  const _sec = sec % 60;

  return `${_min} min and ${_sec} sec`;
}
