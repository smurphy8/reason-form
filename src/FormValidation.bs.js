// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Caml_chrome_debugger from "bs-platform/lib/es6/caml_chrome_debugger.js";

var initialState = /* record */Caml_chrome_debugger.record(["errors"], [0]);

var updatedState = React.useRef(initialState);

function reducer(state, action) {
  var match = action[0].length < 5;
  if (match) {
    var newState = /* record */Caml_chrome_debugger.record(["errors"], [Caml_chrome_debugger.simpleVariant("::", [
            /* record */Caml_chrome_debugger.record([
                "field",
                "message"
              ], [
                "username",
                "Username must be at least 5 characters"
              ]),
            state[/* errors */0]
          ])]);
    updatedState.current = newState;
    return state;
  } else {
    return state;
  }
}

function useValidation(formType) {
  var match = React.useReducer(reducer, initialState);
  var dispatch = match[1];
  var validate = function (formData) {
    if (formType === "register") {
      return Curry._1(dispatch, /* UsernameRequired */Caml_chrome_debugger.simpleVariant("UsernameRequired", [formData[/* username */0]]));
    } else {
      return 0;
    }
  };
  return /* tuple */[
          match[0],
          updatedState,
          validate
        ];
}

export {
  initialState ,
  updatedState ,
  reducer ,
  useValidation ,
  
}
/* updatedState Not a pure module */
