import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { ITaskDescription } from './interfaces/ITaskDescription';

const TaskDescription: FC<ITaskDescription> = (props) => {
  const { description = 'dslkjfldskfljds' } = props;
  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};
TaskDescription.propTypes = {
  description: PropTypes.string,
};

export default TaskDescription;
