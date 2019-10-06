function classJoiner() {
  return arguments.length
    ? argsToArrayWithOutDuplicates(arguments).join(" ")
    : "";
}

//todo посмотреть зачем нужен этот метод
function mutablePropsCopy(props) {
  const mutatedProps = {};
  for (const property in props) {
    if (property === "className") {
      mutatedProps[property] = classJoiner(
        props[property]
      );
    }else {
      mutatedProps[property] = props[property];
    }
  }
  return mutatedProps;

}

const argsToArrayWithOutDuplicates = args => {
  let tmpArray = [];
  //copy arguments to array and split by space if element is a string
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === "string" || args[i] instanceof String) {
      tmpArray = tmpArray.concat(args[i].split(" "));
      continue;
    }
    tmpArray = tmpArray.concat(args[i]);
  }
  return [...new Set(tmpArray)];
};

export {mutablePropsCopy, classJoiner}