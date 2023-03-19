import { Grid, Box, Avatar, Typography } from '@mui/material';
import { FC } from 'react';
import { Status } from '../createTaskForm/enums/Status';
import emitCorrectLabel from './emitCorrectLabel';
import emitCorrectBorderColor from './helpers/emitCorrectBorderColor';
import { ITaskCounter } from './interfaces/ITaskCounter';
import PropTypes from 'prop-types';

const TaskCounter: FC<ITaskCounter> = (props) => {
  const { status = Status.completed, count = 0 } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center">
      <Avatar
        sx={{
          border: '5px solid',
          borderColor: `${emitCorrectBorderColor(status)}`,
          width: '96px',
          height: '96px',
          backgroundColor: 'transparent',
          marginBottom: '16px',
        }}>
        <Typography color="#ffffff" variant="h4">
          {count}
        </Typography>
      </Avatar>
      <Typography
        color="#ffffff"
        variant="h5"
        fontWeight="bold"
        fontSize="20px">
        {emitCorrectLabel(status)}
      </Typography>
    </Box>
  );
};

export default TaskCounter;

TaskCounter.propTypes = {
  count: PropTypes.number,
  status: PropTypes.oneOf([Status.todo, Status.completed, Status.inProgress]),
};
