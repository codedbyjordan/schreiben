const map = new WeakMap();
let index = 0;

export function getKey(val: any) {
  let key = map.get(val);
  if (!key) {
    key = "key-" + index++;
    map.set(val, key);
  }
  return key;
}
