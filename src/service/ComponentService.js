export default function classJoiner() {
  return arguments.length
    ? argsToArrayWithOutDublicates(arguments).join(' ')
    : "";
}

const argsToArrayWithOutDublicates=(args)=>{
  let tmpArray = [];
  //copy arguments to array and split by space if element is a string
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === 'string' || args[i] instanceof String){
      tmpArray.push(args[i].split(' '))
      continue
    }
    tmpArray.push(args[i])
  }
  return [... new Set(tmpArray)]
}