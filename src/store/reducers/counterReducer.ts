// messages
const NewValuesText = "enter values and press 'set'";
const IncorrectValuesText = "incorrect values";

// types of actions
export const ACCEPT_SETTINGS = "ACCEPT_SETTINGS";
export const CHANGE_SETTINGS = "CHANGE_SETTINGS";
export const INCREMENT_VALUE = "INCREMENT_VALUE";
export const DECREMENT_VALUE = "DECREMENT_VALUE";
export const RESET_VALUE = "RESET_VALUE";

// actions creators
export const changeSettings = (minValue: number, maxValue: number) =>
  ({
    type: CHANGE_SETTINGS,
    payload: { minValue, maxValue },
  } as const);
export const acceptSettings = () => ({ type: ACCEPT_SETTINGS } as const);
export const incrementValue = () => ({ type: INCREMENT_VALUE } as const);
export const decrementValue = () => ({ type: DECREMENT_VALUE } as const);
export const resetValue = () => ({ type: RESET_VALUE } as const);

// general action type
type ValuesActionType =
  | ReturnType<typeof changeSettings>
  | ReturnType<typeof incrementValue>
  | ReturnType<typeof decrementValue>
  | ReturnType<typeof resetValue>
  | ReturnType<typeof acceptSettings>;

// state type
type SettingsStateType = {
  minValue: number;
  maxValue: number;
};

export type StateType = SettingsStateType & {
  currentValue: number;
  error: boolean;
  text: string;
};

const initialState: StateType = {
  minValue: 0,
  maxValue: 10,
  currentValue: 0,
  error: false,
  text: "",
};

// reducerValue
type ValuesReducerType = (
  state: StateType,
  action: ValuesActionType
) => StateType;
export const counterReducer: ValuesReducerType = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CHANGE_SETTINGS:
      const { minValue, maxValue } = action.payload;
      const error = minValue >= maxValue || minValue < 0;
      return {
        ...state,
        minValue,
        maxValue,
        error,
        text: error ? IncorrectValuesText : NewValuesText,
      };
    case ACCEPT_SETTINGS:
      return {
        ...state,
        currentValue: state.minValue,
        text: "",
      };
    case INCREMENT_VALUE:
      return { ...state, currentValue: state.currentValue + 1, text: "" };
    case DECREMENT_VALUE:
      return { ...state, currentValue: state.currentValue - 1, text: "" };
    case RESET_VALUE:
      return { ...state, currentValue: state.minValue, text: "" };
    default:
      return state;
  }
};
