export const createAsyncThunk = (
  type: string,
  asyncCallback: (state: any, dispatch: any) => any,
  payload?: any
) =>
  async function (dispatch: any, state: any) {
    try {
      dispatch({ type: `${type}-pending`, payload });
      const response = await asyncCallback(state, dispatch);
      dispatch({ type: `${type}-completed`, payload: response });
    } catch (error) {
      dispatch({ type: `${type}-rejected`, payload: error });
    }
  };
