import React, { useReducer } from 'react';
import OrganizationContext from './organizationContext';
import organizationReducer from './organizationReducer';
import {
  GET_ORGANIZATIONS,
  GET_POSSIBLE_DEPARTMENTS,
  SET_CURRENT_ORGANIZATION,
  UPDATE_ORGANIZATION,
  ORGANIZATIONS_ERROR,
} from '../types';

const OrganizationState = (props) => {
  const initialState = {
    organizations: null,
    currentOrganization: null,
    possibleDepartments: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(organizationReducer, initialState);

  const getOrganizations = async () => {
    try {
      state.loading = true;
      const res = await fetch('/organizations');
      const data = await res.json();
      dispatch({ type: GET_ORGANIZATIONS, payload: data });
    } catch (err) {
      dispatch({ type: ORGANIZATIONS_ERROR, payload: err.msg });
    }
  };

  const getPossibleDepartments = async () => {
    try {
      const res = await fetch('/possibleDepartments');
      const data = await res.json();
      dispatch({ type: GET_POSSIBLE_DEPARTMENTS, payload: data });
    } catch (err) {
      dispatch({ type: ORGANIZATIONS_ERROR, payload: err.msg });
    }
  };

  const setCurrentOrganization = async (organization) => {
    dispatch({ type: SET_CURRENT_ORGANIZATION, payload: organization });
  };

  const updateOrganization = async (organization) => {
    try {
      const res = await fetch(`/organizations/${organization.id}`, {
        method: 'PUT',
        body: JSON.stringify(organization),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();

      dispatch({
        type: UPDATE_ORGANIZATION,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ORGANIZATIONS_ERROR,
        payload: err.response.statusText,
      });
    }
  };

  return (
    <OrganizationContext.Provider
      value={{
        organizations: state.organizations,
        currentOrganization: state.currentOrganization,
        possibleDepartments: state.possibleDepartments,
        loading: state.loading,
        getOrganizations,
        getPossibleDepartments,
        setCurrentOrganization,
        updateOrganization,
      }}
    >
      {props.children}
    </OrganizationContext.Provider>
  );
};

export default OrganizationState;
