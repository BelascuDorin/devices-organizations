import React from 'react'

import { Grid, Typography} from '@material-ui/core';

const CountColumn = () => {
    return (
        <Grid item xs={1}>
        <Typography color='primary' align='center'>
          #1
        </Typography>
      </Grid>
    )
}

export default CountColumn
