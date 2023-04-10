import React from 'react';
import {
  Grid,
  Box,
  Avatar,
  Typography,
  Alert,
  LinearProgress,
} from '@mui/material';
import { format } from 'date-fns';
import TaskCounter from '../taskCounter/taskCounter';
import Task from '../task/task';
import { useMutation, useQuery } from 'react-query';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ITaskApi } from './interfaces/ITaskApi';
import { Status } from '../createTaskForm/enums/Status';
import { IUpdateTask } from './interfaces/IUpdateTask';
import { countTask } from './helpers/countTask';

const TaskArea = () => {
  const { error, isLoading, data, refetch } = useQuery(
    'tasks',
    async () =>
      await sendApiRequest<ITaskApi[]>('http://localhost:3200/tasks', 'GET')
  );

  //update task mutation
  const updateTask = useMutation((data: IUpdateTask) =>
    sendApiRequest<IUpdateTask>('http://localhost:3200/tasks', 'PUT', data)
  );

  function onStatusChangeHandler(
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) {
    updateTask.mutate({
      id,
      status: e.target.checked ? Status.inProgress : Status.todo,
    });
  }
  function markCompleteHandler(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) {
    updateTask.mutate({ id, status: Status.completed });
  }
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
          <TaskCounter
            status={Status.todo}
            count={data ? countTask(data, Status.todo) : undefined}
          />
          <TaskCounter
            status={Status.inProgress}
            count={data ? countTask(data, Status.inProgress) : undefined}
          />
          <TaskCounter
            status={Status.completed}
            count={data ? countTask(data, Status.completed) : undefined}
          />
        </Grid>
        <Grid item display="flex" flexDirection="column" md={8} xs={10}>
          <>
            {error && (
              <Alert severity="error">
                There was an error fetching your tasks
              </Alert>
            )}

            {!error && Array.isArray(data) && data.length === 0 && (
              <Alert severity="warning">There is not any tasks yet.</Alert>
            )}

            {isLoading ? (
              <LinearProgress />
            ) : (
              Array.isArray(data) &&
              data.length > 0 &&
              data.map((task, index) => {
                return (
                  (task.status === Status.todo ||
                    task.status === Status.inProgress) && (
                    <Task
                      key={index}
                      id={task.id}
                      title={task.title}
                      date={new Date(task.date)}
                      description={task.description}
                      priority={task.priority}
                      status={task.status}
                      onStatusChange={onStatusChangeHandler}
                      onClick={markCompleteHandler}
                    />
                  )
                );
              })
            )}
          </>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TaskArea;
