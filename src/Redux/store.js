import { legacy_createStore as createStore } from "redux";

import { reducer } from "./reducer";

export const store = createStore(reducer,{auth_token:null});

store.subscribe(() => {
  console.log("store:", store.getState());
});
