import React from "react";
import asyncer from "../middlewares/asyncer";
import rootSlice from "./the-peaks-state";

export interface ProviderStateInterface {
  state: typeof rootSlice.rootState;
  dispatch: React.Dispatch<any>;
}

export const StoreContext = React.createContext<ProviderStateInterface>(
  {} as ProviderStateInterface
);

export function useStoreContext() {
  return React.useContext<ProviderStateInterface>(StoreContext);
}

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatchBase] = React.useReducer(
    rootSlice.rootReducer,
    rootSlice.rootState
  );

  const dispatch: React.Dispatch<any> = asyncer(dispatchBase, state);

  const providerState: ProviderStateInterface = {
    state,
    dispatch,
  };

  return (
    <StoreContext.Provider value={providerState}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
