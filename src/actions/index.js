import { API_ADDRESS } from "../constants/general";
import { FULL_UPDATE } from "../constants/action-types";
import { authGet } from "../utils/fetching";

export function login(payload) {
  return function(dispatch) {
    return fetch(`${API_ADDRESS}/user_auth`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(payload),
      credentials: 'include',
    }).then(response => response.json())
      .then(json => {
        if (json.success){
          dispatch({ type: FULL_UPDATE, payload: json });
        } else {
          throw new Error("Log-In request failed");
        }
      })
      .then(() => dispatch(preLoadAll()));
  }
};

export function reloadInfo() {
  return function(dispatch) {
    return authGet(`${API_ADDRESS}/my_info`)
      .then(response => response.json())
      .then(json => {
        if (json.success){
          return dispatch({ type: FULL_UPDATE, payload: {user: json.info} });
        } else {
          return dispatch(logout())
        }
      });
  }
};

export function logout() {
  return function(dispatch) {
    return authGet(`${API_ADDRESS}/logout`)
      .then(response => response.json())
      .then(json => {
        if (json.success){
          dispatch({ type: FULL_UPDATE, payload: {user: null} });
        } else {
          throw new Error("Logout request failed");
        }
      })
  }
}

export function getEnums() {
  return function(dispatch) {
    return authGet(`${API_ADDRESS}/get_enums`)
    .then(response => response.json())
    .then(json => {
      if (json.success){
        return dispatch({ type: FULL_UPDATE, payload: {enums: json.enums} });
      }
    });
  }
};

export function preLoadAll() {
  return function(dispatch) {
    return Promise.all([
      dispatch(reloadInfo()),
    ])
  }
};
