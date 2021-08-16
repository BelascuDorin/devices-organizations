import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  alignVerticallyCenter: {
    height: '30px',
    lineHeight: '30px',
    verticalAlign: 'middle',
    paddingLeft: '10px',
  },
  boldTitle: {
    fontWeight: 'bold',
    color: 'black',
  },
  greyedTitle: {
    color: theme.palette.primary.dark,
  },
}));

const CardTitle = ({ textContent, mb, bold }) => {
  const classes = useStyles();
  return (
    <Box
      mb={mb}
      bgcolor='background.main'
      className={classes.alignVerticallyCenter}
    >
      <span className={bold ? classes.boldTitle : classes.greyedTitle}>
        {textContent}
      </span>
    </Box>
  );
};

export default CardTitle;
