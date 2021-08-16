import { useState } from 'react';
import { Card, CardContent } from '@material-ui/core';

import CardTitle from 'core/CardTitle';
import SearchBox from 'core/SearchBox';
import ElementsList from 'core/ElementsList';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  select: {
    width: '100%',
    height: '40px',
    border: 'none',
    borderBottom: '1px solid',
  },
}));

const Departments = ({
  organization,
  possibleDepartments,
  updateOrganization,
}) => {
  const classes = useStyles();

  const [selected, setSelected] = useState('');

  const handleChange = (event) => {
    let toUpdate = { ...organization };
    const departmentToAdd = possibleDepartments.filter((d) => {
      if (d.name === event.target.value) return d;
      return null;
    });

    toUpdate.departments.push(departmentToAdd[0]);
    updateOrganization(toUpdate);

    setSelected(event.target.value);
  };

  const handleDelete = (index) => {
    let toUpdate = { ...organization };
    toUpdate.departments.splice(index, 1);

    updateOrganization(toUpdate);
  };

  return (
    <Card>
      <CardTitle textContent='Departments' bold={true} />
      <CardContent>
        <SearchBox label='Name'></SearchBox>

        {possibleDepartments && Array.isArray(possibleDepartments) ? (
          <select
            value={selected}
            onChange={handleChange}
            className={classes.select}
          >
            {possibleDepartments.map((option) => (
              <option key={option.id} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        ) : (
          ''
        )}

        <ElementsList
          elements={organization?.departments}
          handleDelete={handleDelete}
        ></ElementsList>
      </CardContent>
    </Card>
  );
};

export default Departments;
