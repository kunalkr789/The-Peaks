const logger = (action: object, prevState: object, currentState: object) => {
  console.group("Logger");
  console.log("Action:", action);
  console.log("Previous State", prevState);
  console.log("Current State", currentState);
};

export default logger;
