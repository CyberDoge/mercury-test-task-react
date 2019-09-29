export default function classJoiner() {
  return arguments.length ? Array.prototype.slice.call(arguments).join(' ') : '';
}
