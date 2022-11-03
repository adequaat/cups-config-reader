const regex = /^(\w.*?)\s(.*?)(\n|$)/gm;

export default function parse (str) {
  return Array.from(str.matchAll(regex)).reduce((prev, [, prop, val]) => 
    Object.assign(prev, {[prop]: val})
  , {});
}