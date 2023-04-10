import React, { FC } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  Switch,
  FormControlLabel,
  Button,
} from '@mui/material';
import { ITaskFooter } from '../taskCounter/interfaces/ITaskFooter';
import { Status } from '../createTaskForm/enums/Status';

const TaskFooter: FC<ITaskFooter> = (props) => {
  const {
    id,
    status,
    onClick = (e) => console.log(e),
    onStatusChange = (e) => console.log(e),
  } = props;
  console.log(status);
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}>
      <FormControlLabel
        label="in Progress"
        control={
          <Switch
            onChange={(e) => onStatusChange(e, id)}
            color="warning"
            checked={status === Status.inProgress || false}
          />
        }
      />

      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#ffffff' }}
        onClick={(e) => onClick(e, id)}>
        Mark Complete
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  onClick: PropTypes.func,
  onStatusChange: PropTypes.func,
  id: PropTypes.string.isRequired,
  status: PropTypes.string,
};

export default TaskFooter;
