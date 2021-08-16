import React from 'react';
import { Grid, Button } from '@material-ui/core';
import BlueBoxWithLabel from 'core/BlueBoxWithLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  statusButton: {
    borderRadius: "20px",
    height: "25px",
    width: "93%",
    backgroundColor: theme.palette.secondary.dark,
    color: "white",
  },
}));

const CompanyContent = ({ device }) => {
  const classes = useStyles();
  
  const { intake_date, issue_date, status } = device;
  return (
    <Grid container>
      <Grid item xs={4}>
        <div>Status</div>
        <Button className={classes.statusButton}>
          {status}
        </Button>
      </Grid>
      <Grid item xs={4}>
        <BlueBoxWithLabel
          labelText='Intake Date'
          height='25px'
          mr={2}
          content={intake_date}
        />
      </Grid>
      <Grid item xs={4}>
        <BlueBoxWithLabel
          labelText='Issue Date'
          height='25px'
          content={issue_date}
        />
      </Grid>
    </Grid>
  );
};

export default CompanyContent;
