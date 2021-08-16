import { useState } from 'react';

import { Card, CardContent, Button } from '@material-ui/core';

import CardTitle from 'core/CardTitle';
import SearchBox from 'core/SearchBox';
import ElementsList from 'core/ElementsList';

import { TextField, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  form: {},
  textField: {
    width: '100%',
  },
  formButton: {
    marginTop: '10px',
  },
}));

const CostCenters = ({ organization, updateOrganization }) => {
  const [costCenter, setCostCenter] = useState('');

  const handleCostCenterChanced = (e) => setCostCenter(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    let toUpdate = { ...organization };
    toUpdate.costCenters.push({ name: costCenter });

    updateOrganization(toUpdate);
  };

  const classes = useStyles();
  return (
    <Card>
      <CardTitle textContent='Cost Centers' bold={true} />
      <CardContent>
        <SearchBox label='Name'></SearchBox>
        <form
          noValidate
          autoComplete='off'
          className={classes.form}
          onSubmit={handleSubmit}
        >
          <Grid container>
            <Grid item xs={10}>
              <TextField
                id='organization-name'
                label='New Cost Center'
                value={costCenter}
                className={classes.textField}
                onChange={handleCostCenterChanced}
                InputProps={{
                  className: classes.input,
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <Button type='submit' className={classes.formButton} >
                <SaveIcon />
              </Button>
            </Grid>
          </Grid>
        </form>
        <ElementsList
          elements={organization?.costCenters}
          withDelete={false}
        ></ElementsList>
      </CardContent>
    </Card>
  );
};

export default CostCenters;
