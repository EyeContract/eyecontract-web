import { actionTypes } from "../constants";

const initialState = {
  isOpen: false
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_UPLOAD_MODAL: {
      return {
        ...state,
        isOpen: action.isOpen
      }
    }
    default: {
      return state;
    }
  }
}