import React from 'react';
import CardTitle from 'core/CardTitle';
import { Box } from '@material-ui/core';
import CompanyContent from './companyAndOwnership/CompanyContent';
import OwnershipContent from './companyAndOwnership/OwnershipContent';

const CompanyAndOwnership = ({ device }) => {
  
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: 1,
        gridTemplateRows: 'auto',
        gridTemplateAreas: `'company company company ownership ownership ownership ownership'
                            'company company company ownership ownership ownership ownership'`,
      }}
    >
      <Box sx={{ gridArea: 'company' }} mr={2}>
        <CardTitle
          textContent='Company Related Information'
          bold={true}
          mb={2}
        />
        <CompanyContent device={device}/>
      </Box>
      <Box sx={{ gridArea: 'ownership' }}>
        <CardTitle textContent='Ownership Data' bold={true} mb={2} />
        <OwnershipContent device={device}/>
      </Box>
    </Box>
  );
};

export default CompanyAndOwnership;
