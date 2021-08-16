import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { List, ListItem, ListItemSecondaryAction } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  listItemContainer: {
    backgroundColor: theme.palette.background.main,
    borderLeft: `5px solid ${theme.palette.primary.dark}`,
    borderRadius: '5px',
    margin: '5px 0',
    '&:hover': {
      borderColor: theme.palette.secondary.dark,
      backgroundColor: theme.palette.primary.light,
    },
    padding: '5px 16px',
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  icon: {
    color: theme.palette.error.main,
  },
  iconAction: {
    right: 0,
    padding: '0 5px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
}));

const ElementsList = ({ elements, withDelete = true, handleDelete }) => {
  if (!Array.isArray(elements)) elements = [];

  const classes = useStyles();
  const [hoveredIndex, setHoveredIndex] = useState(1);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  return (
    <List>
      {elements.map((element, index) => (
        <ListItem
          key={index}
          classes={{ root: classes.listItemContainer }}
          button
          onMouseOver={() => handleMouseOver(index)}
          onMouseOut={handleMouseOut}
        >
          <div className={classes.listItem}>
            <span>{element.name}</span>
          </div>

          {withDelete && hoveredIndex === index && (
            <ListItemSecondaryAction onClick={() => handleDelete(index)} classes={{ root: classes.iconAction }}>
              <DeleteIcon className={classes.icon} />
            </ListItemSecondaryAction>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default ElementsList;
