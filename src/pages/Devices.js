import React, { useEffect, useContext } from 'react';
import { Container } from '@material-ui/core';
import DeviceContext from 'context/devices/deviceContext';
import DeviceCard from '../components/devices/DeviceCard';

const Devices = () => {
  const deviceContext = useContext(DeviceContext);
  const { getDevices, loading, devices } = deviceContext;

  useEffect(() => {
    getDevices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !loading && devices? (
    <Container maxWidth='lg'>
      {devices.map((device, index) => (
        <DeviceCard device={device} key={device.id} />
      ))}
    </Container>
  ) : (
    ''
  );
};

export default Devices;
