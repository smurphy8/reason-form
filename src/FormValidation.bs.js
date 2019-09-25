// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Caml_array from "bs-platform/lib/es6/caml_array.js";
import * as Caml_chrome_debugger from "bs-platform/lib/es6/caml_chrome_debugger.js";

var registerFormRules = /* array */[
  /* record */Caml_chrome_debugger.record([
      "id",
      "field",
      "message",
      "valid"
    ], [
      1,
      "username",
      "Username must have at least 5 characters.",
      false
    ]),
  /* record */Caml_chrome_debugger.record([
      "id",
      "field",
      "message",
      "valid"
    ], [
      2,
      "email",
      "Email must have at least 5 characters.",
      false
    ]),
  /* record */Caml_chrome_debugger.record([
      "id",
      "field",
      "message",
      "valid"
    ], [
      3,
      "email",
      "Email must be a valid email address.",
      false
    ]),
  /* record */Caml_chrome_debugger.record([
      "id",
      "field",
      "message",
      "valid"
    ], [
      4,
      "password",
      "Password must have at least 10 characters.",
      false
    ])
];

var loginFormRules = /* array */[
  /* record */Caml_chrome_debugger.record([
      "id",
      "field",
      "message",
      "valid"
    ], [
      1,
      "email",
      "Email is required.",
      false
    ]),
  /* record */Caml_chrome_debugger.record([
      "id",
      "field",
      "message",
      "valid"
    ], [
      2,
      "password",
      "Password is required.",
      false
    ])
];

function validateEmail(email) {
  var re = (/^(([^<>()\[\]\.,;:\s@']+(\.[^<>()\[\]\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  return re.test(email);
}

function registerFormRulesReducer(state, action) {
  switch (action.tag | 0) {
    case 0 : 
        var match = action[0].length >= 4;
        if (match) {
          Caml_array.caml_array_get(state, 0)[/* valid */3] = true;
          return state;
        } else {
          Caml_array.caml_array_get(state, 0)[/* valid */3] = false;
          return state;
        }
    case 1 : 
        var match$1 = action[0].length >= 4;
        if (match$1) {
          Caml_array.caml_array_get(state, 1)[/* valid */3] = true;
          return state;
        } else {
          Caml_array.caml_array_get(state, 1)[/* valid */3] = false;
          return state;
        }
    case 2 : 
        var match$2 = validateEmail(action[0]);
        if (match$2) {
          Caml_array.caml_array_get(state, 2)[/* valid */3] = true;
          return state;
        } else {
          Caml_array.caml_array_get(state, 2)[/* valid */3] = false;
          return state;
        }
    case 3 : 
        var match$3 = action[0].length >= 9;
        if (match$3) {
          Caml_array.caml_array_get(state, 3)[/* valid */3] = true;
          return state;
        } else {
          Caml_array.caml_array_get(state, 3)[/* valid */3] = false;
          return state;
        }
    
  }
}

function loginFormRulesReducer(state, action) {
  if (action.tag) {
    var match = true;
    if (match) {
      Caml_array.caml_array_get(state, 1)[/* valid */3] = true;
      return state;
    } else {
      Caml_array.caml_array_get(state, 1)[/* valid */3] = false;
      return state;
    }
  } else {
    var match$1 = true;
    if (match$1) {
      Caml_array.caml_array_get(state, 0)[/* valid */3] = true;
      return state;
    } else {
      Caml_array.caml_array_get(state, 0)[/* valid */3] = false;
      return state;
    }
  }
}

function useValidation(formType) {
  switch (formType) {
    case "login" : 
        var match = React.useReducer(loginFormRulesReducer, loginFormRules);
        var dispatch = match[1];
        var validate = function (param) {
          Curry._1(dispatch, /* EmailRequired */Caml_chrome_debugger.variant("EmailRequired", 0, [param[/* email */1]]));
          return Curry._1(dispatch, /* PasswordRequired */Caml_chrome_debugger.variant("PasswordRequired", 1, [param[/* password */2]]));
        };
        return /* tuple */[
                match[0],
                validate
              ];
    case "register" : 
        var match$1 = React.useReducer(registerFormRulesReducer, registerFormRules);
        var dispatch$1 = match$1[1];
        var validate$1 = function (param) {
          var email = param[/* email */1];
          Curry._1(dispatch$1, /* UsernameLongEnough */Caml_chrome_debugger.variant("UsernameLongEnough", 0, [param[/* username */0]]));
          Curry._1(dispatch$1, /* EmailLongEnough */Caml_chrome_debugger.variant("EmailLongEnough", 1, [email]));
          Curry._1(dispatch$1, /* EmailValid */Caml_chrome_debugger.variant("EmailValid", 2, [email]));
          return Curry._1(dispatch$1, /* PasswordLongEnough */Caml_chrome_debugger.variant("PasswordLongEnough", 3, [param[/* password */2]]));
        };
        return /* tuple */[
                match$1[0],
                validate$1
              ];
    default:
      var state = /* array */[];
      var validate$2 = function (param) {
        return /* () */0;
      };
      return /* tuple */[
              state,
              validate$2
            ];
  }
}

export {
  registerFormRules ,
  loginFormRules ,
  validateEmail ,
  registerFormRulesReducer ,
  loginFormRulesReducer ,
  useValidation ,
  
}
/* react Not a pure module */
