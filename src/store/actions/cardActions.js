import { FETCH_DATA, ASCENDING_ORDER, DESCENDING_ORDER, SELECTED_PLAYER } from "./types";

export const fetchData = () => async (dispatch) => {
  let response = await fetch("../../../players.json");
  let data = await response.json();
  dispatch({
    type: FETCH_DATA,
    payload: data.players,
  });
};

export const sortAsc = () => (dispatch) => {
  dispatch({
    type: ASCENDING_ORDER,
  });
};

export const sortDesc = () => (dispatch) => {
  dispatch({
    type: DESCENDING_ORDER,
  });
};

export const selectPlayer = (e) => (dispatch) => {
  dispatch({
    type: SELECTED_PLAYER,
    payload: e
  });
};
