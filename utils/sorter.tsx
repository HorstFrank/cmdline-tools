export function sortByTitle(a, b) {
  a = a.title;
  b = b.title;
  // return a > b ? 1 : a < b ? -1 : 0;
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else if (a === b) {
    return 0;
  }
}
