import logger from "../middlewares/logger";

export const combineReducers =
  (slices: any, options?: { log?: boolean }) => (state: any, action: any) => {
    const currentState = Object.keys(slices).reduce(
      (acc, prop) => ({
        ...acc,
        [prop]: slices[prop](acc[prop], action),
      }),
      state
    );

    if (options?.log) logger(action, state, currentState);

    return currentState;
  };
