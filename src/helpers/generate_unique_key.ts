export function generateUniqueKey(array: any[]) {
  let key: number;
  do {
    key = Math.floor(Math.random() * 1000000); //
    // eslint-disable-next-line @typescript-eslint/no-loop-func
  } while (array.some((item) => item.key === key)); //
  return key;
}
