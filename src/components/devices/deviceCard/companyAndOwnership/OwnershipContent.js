import React from 'react';
import { Grid } from '@material-ui/core';
import BlueBoxWithLabel from 'core/BlueBoxWithLabel';

const OwnershipContent = ({ device }) => {
  const { device_ownership, warranty_start_date, asset_tag, internal_po } =
    device;
  return (
    <Grid container>
      <Grid item xs={3}>
        <BlueBoxWithLabel
          labelText='Device Ownership'
          height='25px'
          mr={2}
          content={device_ownership}
        />
      </Grid>
      <Grid item xs={3}>
        <BlueBoxWithLabel
          labelText='Waranty Start Date'
          height='25px'
          mr={2}
          content={warranty_start_date}
        />
      </Grid>
      <Grid item xs={3}>
        <BlueBoxWithLabel
          labelText='Asset Tag'
          height='25px'
          mr={2}
          content={asset_tag}
        />
      </Grid>
      <Grid item xs={3}>
        <BlueBoxWithLabel
          labelText='Internal PO'
          height='25px'
          content={internal_po}
        />
      </Grid>
    </Grid>
  );
};

export default OwnershipContent;
