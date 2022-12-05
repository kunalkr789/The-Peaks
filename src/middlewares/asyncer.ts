const asyncer = (dispatch: (arg0: any) => any, state: any) =>
  function (action: (arg0: any, arg1: any) => any) {
    typeof action === "function" ? action(dispatch, state) : dispatch(action);
  };

export default asyncer;
