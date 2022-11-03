const regex = /^[^\w].*$|^\n/gm;

export default function sanitize(str) {
  return str.replace(regex, '');
}