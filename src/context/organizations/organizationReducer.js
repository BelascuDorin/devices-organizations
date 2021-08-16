import {
  GET_ORGANIZATIONS,
  GET_POSSIBLE_DEPARTMENTS,
  ORGANIZATIONS_ERROR,
  SET_CURRENT_ORGANIZATION,
  UPDATE_ORGANIZATION,
} from '../types';

const organizationReducer = (state, action) => {
  switch (action.type) {
    case GET_ORGANIZATIONS:
      return {
        ...state,
        organizations: action.payload,
        loading: false,
      };
    case GET_POSSIBLE_DEPARTMENTS:
      return {
        ...state,
        possibleDepartments: action.payload,
      };
    case SET_CURRENT_ORGANIZATION:
      return {
        ...state,
        currentOrganization: action.payload,
      };
    case UPDATE_ORGANIZATION:
      return {
        ...state,
        organizations: state.organizations.map((organization) =>
          organization.id === action.payload.id ? action.payload : organization
        ),
      };
    case ORGANIZATIONS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default organizationReducer;
