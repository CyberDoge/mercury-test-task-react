export default class ComponentService {
  static classJoiner(){
    return arguments.length ? Array.prototype.slice.call(arguments).join(' ') : '';
  }
}
