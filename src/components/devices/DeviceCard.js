import React from 'react';

import { Box, Card, CardContent, Grid } from '@material-ui/core';
import CountColumn from './deviceCard/CountColumn';
import CardTitle from 'core/CardTitle';
import HardwareInformation from './deviceCard/HardwareInformation';
import CompanyAndOwnership from './deviceCard/CompanyAndOwnership';
import DeviceTimeline from 'components/devices/deviceCard/DeviceTimeline';

const DeviceCard = ({ device }) => {
  return (
    <Box pt={5}>
      <Card>
        <CardContent>
          <Grid container>
            <CountColumn />
            <Grid item xs={11} container>
              <Grid item xs={12}>
                <CardTitle textContent='Device information' bold={true} />
              </Grid>

              <Grid item xs={12} container>
                <HardwareInformation device={device}/>
              </Grid>

              <Grid item xs={12}>
                <CompanyAndOwnership device={device}/>
              </Grid>

              <Grid item xs={12}>
                <DeviceTimeline device={device}/>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DeviceCard;
