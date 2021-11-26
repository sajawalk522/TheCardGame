import { FETCH_DATA, ASCENDING_ORDER, DESCENDING_ORDER, SELECTED_PLAYER } from "../actions/types";

const initialState = {
  playersData: [],
  selectedPlayer: null,
};

export default function players(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        playersData: action.payload,
      };
    case ASCENDING_ORDER:
      return {
        ...state,
        playersData: [
          ...state.playersData.sort((a, b) => {
            let x = a.RealName.toLowerCase();
            let y = b.RealName.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
          }),
        ],
      };
    case DESCENDING_ORDER:
      return {
        ...state,
        playersData: [
          ...state.playersData.sort((a, b) => {
            let x = a.RealName.toLowerCase();
            let y = b.RealName.toLowerCase();
            return x < y ? 1 : x > y ? -1 : 0;
          }),
        ],
      };
    case SELECTED_PLAYER:
      return {
        ...state,
        selectedPlayer: action.payload,
      };
    default:
      return state;
  }
}
