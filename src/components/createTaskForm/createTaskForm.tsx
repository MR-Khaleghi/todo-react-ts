import React, { FC, ReactElement, useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Stack,
  LinearProgress,
  Button,
  Alert,
  AlertTitle,
} from '@mui/material';
import TaskTitleField from './_taskTitleField';
import TaskDescriptionField from './_taskDescriptionField';
import TaskDateField from './_taskDateFiled';
import TaskSelectField from './_taskSelectField';
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ICreateTask } from '../taskArea/interfaces/ICreateTask';
import { useMutation } from 'react-query';
import { clearTimeout } from 'timers';

const CreateTaskForm = () => {
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | null>(new Date());
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.normal);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  //create task mutation
  // const createTaskMutation = useMutation({
  //   mutationFn: (data: ICreateTask) => {
  //     return sendApiRequest('http://localhost:3200/tasks', 'POST', data);
  //   },
  // });

  const createTask = useMutation((data: ICreateTask) =>
    sendApiRequest('http://localhost:3200/tasks', 'POST', data)
  );

  function createTaskHandler() {
    if (!title || !date || !description) {
      return;
    }
    const task: ICreateTask = {
      title,
      description,
      date: date.toString(),
      status,
      priority,
    };
    // const testApi = sendApiRequest('http://localhost:3200/tasks', 'POST', task);
    createTask.mutate(task);
    console.log('fired');
  }

  useEffect(() => {
    if (createTask.isSuccess) {
      setShowSuccess(true);
    }
    setTimeout(() => setShowSuccess(false), 7000);
  }, [createTask.isSuccess]);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="start"
      width="100%"
      px={4}
      my={6}>
      {showSuccess && (
        <Alert severity="success" sx={{ width: '100%', marginBottom: '16px' }}>
          <AlertTitle>Success</AlertTitle>
          The task has been created successfully
        </Alert>
      )}
      <Typography mb={2} component="h2" variant="h6">
        Create a Task
      </Typography>
      <Stack width="100%" spacing={2}>
        <TaskTitleField
          onChange={(e) => setTitle(e.target.value)}
          disabled={createTask.isLoading}
        />
        <TaskDescriptionField
          disabled={createTask.isLoading}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TaskDateField
          value={date}
          onChange={(date) => setDate(date)}
          disabled={createTask.isLoading}
        />
        <Stack width="100%" direction="row" spacing={2}>
          <TaskSelectField
            disabled={createTask.isLoading}
            label="Status"
            name="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value as string)}
            items={[
              { value: Status.todo, label: Status.todo.toUpperCase() },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              },
            ]}
          />
          <TaskSelectField
            disabled={createTask.isLoading}
            label="Priority"
            name="Priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value as string)}
            items={[
              { value: Priority.low, label: Priority.low },
              { value: Priority.normal, label: Priority.normal },
              { value: Priority.high, label: Priority.high },
            ]}
          />
        </Stack>
        {createTask.isLoading && <LinearProgress />}

        <Button
          disabled={!title || !date || !description || !status || !priority}
          onClick={createTaskHandler}
          variant="contained"
          size="large"
          fullWidth>
          Create a Task
        </Button>
      </Stack>
    </Box>
  );
};

export default CreateTaskForm;
