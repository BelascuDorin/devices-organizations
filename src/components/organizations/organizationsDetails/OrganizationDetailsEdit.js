import React, { useState, useEffect } from 'react';

import {
  Grid,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {},
  textField: {
    width: '100%',
  },
  input: {
    backgroundColor: theme.palette.background.lightGrey,
    paddingLeft: '10px',
    width: '100%',
    height: '25px',
  },
}));

const OrganizationDetailsEdit = ({ organization, updateOrganization }) => {
  const classes = useStyles();
  const [defaultChecked, setdefaultChecked] = useState(true);
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');

  const handleIsDefaultChecked = (event) =>
    setdefaultChecked(event.target.checked);
  const handleDescriptionChance = (e) => setDescription(e.target.value);
  const handleNameChance = (e) => setName(e.target.value);

  useEffect(() => {
    if (organization.isDefault === 'true') setdefaultChecked(true);
    else setdefaultChecked(false);

    setDescription(organization.description);
    setName(organization.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(organization)]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let toUpdate = { ...organization };
    toUpdate.isDefault = defaultChecked ? 'true' : 'false';
    toUpdate.description = description;
    toUpdate.name = name;

    updateOrganization(toUpdate);
  };

  return (
    <form
      noValidate
      autoComplete='off'
      className={classes.form}
      onSubmit={handleSubmit}
    >
      <Grid container spacing={3}>
        <Grid item sm={8}>
          <TextField
            id='organization-name'
            label='Name'
            value={name}
            className={classes.textField}
            onChange={handleNameChance}
            InputProps={{
              className: classes.input,
            }}
          />
        </Grid>
        <Grid item sm={4} style={{}}>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={defaultChecked}
                  onChange={handleIsDefaultChecked}
                />
              }
              label='Is default'
            />
          </div>
        </Grid>
        <Grid item sm={12}>
          <TextField
            id='organization-description'
            label='Description'
            value={description}
            className={classes.textField}
            onChange={handleDescriptionChance}
            InputProps={{
              className: classes.input,
            }}
          />
        </Grid>
        <Grid item sm={6}></Grid>
        <Grid item sm={3}>
          <Button type='submit'>Submit</Button>
        </Grid>
        <Grid item sm={3}>
          <Button type='cancel'>Cancel</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default OrganizationDetailsEdit;
