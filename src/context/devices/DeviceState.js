import React, { useReducer } from 'react';
import DeviceContext from './deviceContext';
import deviceReducer from './deviceReducer';
import { GET_DEVICES, DEVICES_ERROR } from '../types';

const DeviceState = (props) => {
  const initialState = {
    devices: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(deviceReducer, initialState);

  const getDevices = async () => {
    try {
      state.loading = true;
      const res = await fetch('/devices');
      const data = await res.json();
      dispatch({ type: GET_DEVICES, payload: data });
    } catch (err) {
      dispatch({ type: DEVICES_ERROR, payload: err.msg });
    }
  };

  return (
    <DeviceContext.Provider
      value={{
        devices: state.devices,
        loading: state.loading,
        error: state.error,
        getDevices,
      }}
    >
      {props.children}
    </DeviceContext.Provider>
  );
};

export default DeviceState;
