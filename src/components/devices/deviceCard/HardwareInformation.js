import React from 'react';

import { Box } from '@material-ui/core';
import AppleIcon from '@material-ui/icons/Apple';
import BlueBoxWithLabel from 'core/BlueBoxWithLabel';

const HardwareInformation = ({ device }) => {
  const { imei, eid, beschreibung, serial_number, model } = device;

  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
        gap: 1,
        gridTemplateRows: 'auto',
        gridTemplateAreas: `"icon  icon  imei   eid    besch besch besch besch"
                            "model model serial serial besch besch besch besch"`,
      }}
    >
      <Box sx={{ gridArea: 'icon', height: '60px', paddingTop: '15px' }}>
        <AppleIcon /> Apple
      </Box>
      <Box sx={{ gridArea: 'imei', paddingTop: '15px' }} mr={2}>
        <BlueBoxWithLabel labelText='IMEI' height='25px' content={imei} />
      </Box>
      <Box sx={{ gridArea: 'eid', paddingTop: '15px' }} mr={2}>
        <BlueBoxWithLabel labelText='EID' height='25px' content={eid} />
      </Box>
      <Box sx={{ gridArea: 'model', height: '60px' }}>
        <div>Model</div>
        <div>
          <b>{model}</b>
        </div>
      </Box>
      <Box sx={{ gridArea: 'serial' }} mr={2}>
        <BlueBoxWithLabel
          labelText='Serial Number'
          height='25px'
          content={serial_number}
        />
      </Box>
      <Box sx={{ gridArea: 'besch', paddingTop: '15px' }}>
        <BlueBoxWithLabel
          labelText='Beschreibung'
          height='72px'
          content={beschreibung}
        />
      </Box>
    </Box>
  );
};

export default HardwareInformation;
