import React, { useEffect, useContext } from 'react';
import { Grid, Container } from '@material-ui/core';

import OrganizationList from 'components/organizations/OrganizationList';
import OrganizationDetails from 'components/organizations/OrganizationDetails';

import OrganizationContext from 'context/organizations/organizationContext';

const Organizations = () => {
  const deviceContext = useContext(OrganizationContext);
  const {
    loading,
    organizations,
    currentOrganization,
    possibleDepartments,

    getOrganizations,
    getPossibleDepartments,
    setCurrentOrganization,
    updateOrganization,
  } = deviceContext;

  useEffect(() => {
    getOrganizations();
    getPossibleDepartments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (organizations && organizations.length > 0 && !currentOrganization)
      setCurrentOrganization(organizations[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(organizations)]);

  return (
    <Container maxWidth='lg'>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          {!loading && organizations ? (
            <OrganizationList
              organizations={organizations}
              setCurrentOrganization={setCurrentOrganization}
            />
          ) : (
            ''
          )}
        </Grid>
        <Grid item xs={12} sm={8}>
          {currentOrganization ? (
            <OrganizationDetails
              organization={currentOrganization}
              updateOrganization={updateOrganization}
              possibleDepartments={possibleDepartments}
            />
          ) : (
            ''
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Organizations;
