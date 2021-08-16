import { Box, Card, CardContent, Grid } from '@material-ui/core';

import CardTitle from 'core/CardTitle';
import OrganizationDetailsEdit from './organizationsDetails/OrganizationDetailsEdit';
import Departments from './organizationsDetails/Departments';
import CostCenters from './organizationsDetails/CostCenters';

const OrganizationDetails = ({
  organization,
  updateOrganization,
  possibleDepartments,
}) => {
  return (
    <Box>
      <Card>
        <CardTitle textContent='Organization Details' />
        <CardContent>
          <OrganizationDetailsEdit
            organization={organization}
            updateOrganization={updateOrganization}
          />
          <Grid container spacing={6}>
            <Grid item sm={12} md={6}>
              <Departments
                organization={organization}
                possibleDepartments={possibleDepartments}
                updateOrganization={updateOrganization}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <CostCenters
                organization={organization}
                updateOrganization={updateOrganization}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default OrganizationDetails;
