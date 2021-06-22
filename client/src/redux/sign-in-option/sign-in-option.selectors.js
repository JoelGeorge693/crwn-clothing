import { createSelector } from "reselect";

const hiddenValue = (state) => state.signInOption;

export const hiddenCurrentValue = createSelector(
  [hiddenValue],
  (state) => state.hidden
);
