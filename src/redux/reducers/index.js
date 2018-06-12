import { SAVE_TOKEN } from "../constants/action_types";

const initialState = {
    token: '',
    trips: [],
    contacts: []
  };

  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case SAVE_TOKEN:
        return { state, token: [state.token, action.payload] };
      default:
        return state;
    }
  };
  export default rootReducer;