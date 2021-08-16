import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  margin: {
    height: theme.spacing(3),
    right: theme.spacing(2),
  },
}));

const marks = [
  {
    value: 1,
    label: '2020',
  },
  {
    value: 50,
    label: '2021',
  },
  {
    value: 99,
    label: '2022',
  },
];

const STARTING_POINT_DATE = '2020';
const MID_POINT_DATE = '2021';
const ENDING_POINT_DATE = '2022';

function valuetext(value) {
  switch (value) {
    case 0:
      return STARTING_POINT_DATE;
    case 50:
      return MID_POINT_DATE;
    case 100:
      return ENDING_POINT_DATE;
    default:
      return '';
  }
}

const DeviceTimeline = ({ device }) => {
  const classes = useStyles();

  const [datePoints, setDatePoints] = useState([]);
  const [labels, setLabels] = useState({});
  const [loadingDatePoints, setLoadingDatePoints] = useState(false);

  const fromDateToTimestamp = (date) => {
    return new Date(date).getTime();
  };

  const valueLabelFormat = (value) => {
    if (labels && value in labels) {
      const currentLabel = labels[value];
      return currentLabel.name + ' ' + currentLabel.date;
    } else return value;
  };

  const calculateDatePoints = (device) => {
    const todayTimestamp = Date.now();
    const intakeDateTimestamp = fromDateToTimestamp(device?.intake_date);
    const issueDateTimestamp = fromDateToTimestamp(device?.issue_date);
    const warrantyStartDateTimestamp = fromDateToTimestamp(
      device?.warranty_start_date
    );
    const warrantyEndDateTimestamp = fromDateToTimestamp(
      device?.warranty_end_date
    );

    let timestampDates = [
      todayTimestamp,
      intakeDateTimestamp,
      issueDateTimestamp,
      warrantyStartDateTimestamp,
      warrantyEndDateTimestamp,
    ];

    timestampDates = timestampDates.sort();
    const pointsPositions = calculatePointsPositions(timestampDates);
    setDatePoints(pointsPositions);

    let timestampDatesForLabels = [
      { timestamp: todayTimestamp, name: 'Today' },
      { timestamp: intakeDateTimestamp, name: 'Intake' },
      { timestamp: issueDateTimestamp, name: 'Issue' },
      { timestamp: warrantyStartDateTimestamp, name: 'Warranty Start' },
      { timestamp: warrantyEndDateTimestamp, name: 'Warranty End' },
    ];

    timestampDatesForLabels = timestampDatesForLabels.sort(
      (first, second) => first.timestamp > second.timestamp ? 1 : -1
    );
    const labels = setupLabels(timestampDatesForLabels, pointsPositions);

    setLabels(labels);
  };

  const toShorterDate = (date) => date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()


  const setupLabels = (timestamps, points) => {
    let labels = {};

    timestamps.forEach((t, i) => {
      const currentPoint = points[i];
      const currentDate = toShorterDate(new Date(t.timestamp));
      labels[currentPoint] = { name: t.name, date: currentDate };
    });

    return labels;
  };

  const calculatePointsPositions = (timestampDates) => {
    const startingPointTimestamp = fromDateToTimestamp(STARTING_POINT_DATE);
    const endingPointsTimestamp = fromDateToTimestamp(ENDING_POINT_DATE);

    const differenceTimestamp = endingPointsTimestamp - startingPointTimestamp;

    let pointsPositions = [];
    // map to a [0, 100] interval, where 0 is the starting point date and 100 ending point date
    // use the simple 3 rule
    // Diff … 100%
    // Current_diff … x  => x = (current * 100) / diff
    for (const timestampDate of timestampDates) {
      const currentTimestampDiffFromStart =
        timestampDate - startingPointTimestamp;

      const currentPointPosition =
        (currentTimestampDiffFromStart * 100) / differenceTimestamp;

      pointsPositions.push(currentPointPosition);
    }

    return addOffsetToIntersectingPoints(pointsPositions);
  };

  const addOffsetToIntersectingPoints = (points) => {
    let pointsWithOffset = [];
    let apparitionCounter = {};
    for (const point of points) {
      if (apparitionCounter[point]) apparitionCounter[point]++;
      else apparitionCounter[point] = 1;
    }

    for (const point in apparitionCounter) {
      const offset = 1;
      let nrOfOffset = 0;
      for (let i = 0; i < apparitionCounter[point]; i++) {
        const currentOffsetToAdd = nrOfOffset * offset;
        pointsWithOffset.push(parseFloat(point) + currentOffsetToAdd);
        nrOfOffset++;
      }
    }

    return pointsWithOffset;
  };

  useEffect(() => {
    calculateDatePoints(device);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(device)]);

  useEffect(() => {
    if (datePoints.length > 0) setLoadingDatePoints(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(datePoints)]);

  return (
    <>
      <div className={classes.root}>
        <div className={classes.margin} />
        <Typography id='device-timeline' gutterBottom></Typography>
        {!loadingDatePoints ? (
          <Slider
            track='inverted'
            aria-labelledby='device-timeline'
            getAriaValueText={valuetext}
            value={datePoints}
            marks={marks}
            valueLabelFormat={valueLabelFormat}
            valueLabelDisplay='auto'
          />
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default DeviceTimeline;
