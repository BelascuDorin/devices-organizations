import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  Chip,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';

import CardTitle from 'core/CardTitle';

const useStyles = makeStyles((theme) => ({
  listItemSelected: {
    backgroundColor: theme.palette.primary.light,
    borderLeft: `5px solid ${theme.palette.secondary.dark}`,
    borderRadius: '5px',
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  defaultChip: {
    marginRight: '10px',
    color: 'white',
    padding: '0 5px',
  },
  icon: {
    color: theme.palette.secondary.dark,
  },
}));

const OrganizationList = ({ organizations, setCurrentOrganization }) => {
  const classes = useStyles();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const handleListItemClick = (index) => {
    setCurrentOrganization(organizations[index]);
    setSelectedIndex(index);
  };

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  return (
    <Box>
      <Card>
        <CardTitle textContent='Organization' />
        <CardContent>
          <List>
            {organizations.map((organization, index) => (
              <ListItem
                key={organization.id}
                button
                classes={{ selected: classes.listItemSelected }}
                selected={selectedIndex === index}
                onClick={() => handleListItemClick(index)}
                onMouseOver={() => handleMouseOver(index)}
                onMouseOut={handleMouseOut}
              >
                <div className={classes.listItem}>
                  <div>
                    {organization.isDefault === 'true' && (
                      <Chip
                        size='small'
                        label='default'
                        color='primary'
                        className={classes.defaultChip}
                      />
                    )}
                    <span style={{ fontWeight: 'bold' }}>
                      {organization.name}
                    </span>
                  </div>
                  <span>{organization.description}</span>
                </div>

                {hoveredIndex === index && selectedIndex !== index && (
                  <ListItemSecondaryAction>
                    <IconButton>
                      <ChevronRightIcon className={classes.icon} />
                    </IconButton>
                  </ListItemSecondaryAction>
                )}
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default OrganizationList;
