import React from 'react';
import { Grid, Box, Avatar, Typography } from '@mui/material';
import { format } from 'date-fns';
import TaskCounter from '../taskCounter/taskCounter';
import Task from '../task/task';

const TaskArea = () => {
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>Status of Your Task As On {format(new Date(), 'PPPP')}</h2>
      </Box>

      <Grid container display="flex" justifyContent="center">
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}>
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid item display="flex" flexDirection="column" md={8} xs={10}>
          <Task />
          <Task />
          <Task />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TaskArea;
