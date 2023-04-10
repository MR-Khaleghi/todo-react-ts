import React, { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Grid, Box, Avatar, Typography } from '@mui/material';
import TaskHeader from './_taskHeader';
import TaskDescription from './_taskDescription';
import TaskFooter from './_taskFooter';
import { ITask } from './interfaces/ITask';
import renderPriorityBorderColor from './helpers/renderPriorityBorderColor';
import { Priority } from '../createTaskForm/enums/Priority';

const Task: FC<ITask> = (props): ReactElement => {
  const {
    title,
    date,
    description,
    priority = Priority.normal,
    status,
    onStatusChange,
    onClick,
    id,
  } = props;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      width="100%"
      mb={4}
      p={2}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: renderPriorityBorderColor(priority),
      }}>
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter
        onClick={onClick}
        onStatusChange={onStatusChange}
        id={id}
        status={status}
      />
    </Box>
  );
};

Task.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  onClick: PropTypes.func,
  onStatusChange: PropTypes.func,
  priority: PropTypes.string,
  status: PropTypes.string,
};

export default Task;
