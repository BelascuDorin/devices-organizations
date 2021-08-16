import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: '100%',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    color: theme.palette.secondary.dark,
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    backgroundColor: theme.palette.background.lightGrey,
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: '100%',
    borderBottom: '1px solid black',
  },
  label: {
    fontWeight: 'bold',
    fontSize: '12px',
  },
}));

const SearchBox = ({ label }) => {
  const classes = useStyles();

  return (
    <div>
      <span className={classes.label}>{label}</span>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon style={{ width: '0.8em' }} />
        </div>
        <InputBase
          placeholder='Search…'
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
    </div>
  );
};

export default SearchBox;
