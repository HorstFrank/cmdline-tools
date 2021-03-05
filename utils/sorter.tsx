export function sortByKey(a, b, key) {
  a = a[key];
  b = b[key];
  // return a > b ? 1 : a < b ? -1 : 0;
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else if (a === b) {
    return 0;
  }
}
