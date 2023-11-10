export function isEmptyObject(value: any) {
    return Object.keys(value).length === 0 && value.constructor === Object;
  }