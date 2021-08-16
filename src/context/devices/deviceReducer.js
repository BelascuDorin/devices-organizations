import { GET_DEVICES, DEVICES_ERROR } from '../types';

const deviceReducer = (state, action) => {
  switch (action.type) {
    case GET_DEVICES:
      return {
        ...state,
        devices: action.payload,
        loading: false,
      };
    case DEVICES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default deviceReducer;
